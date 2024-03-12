using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;
using Zquax.EazyEra.DatabaseCommon;
using Zquax.EazyEra.Models;

public class DatabaseManager : IDatabaseManager
{
    private MsSqlConfiguration _msSqlConfiguration;
    private string connectionString = "Server=tcp:eazyera.database.windows.net,1433;Initial Catalog=EazyEra;Persist Security Info=False;User ID=eazyera;Password=Namu#19Btd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=true;";

    public async Task<List<T>> ExecuteStoredProcedure<T>(string storedProcedureName, SqlParameter[] parameters = null) where T : new()
    {
        List<T> results = new List<T>();

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
            {
                command.CommandType = CommandType.StoredProcedure;

                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }

                try
                {
                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            T item = new T();
                            MapDataToObject(reader, item);
                            results.Add(item);
                        }
                    }
                }
                catch (Exception ex)
                {
                    // Handle exception as needed
                    Console.WriteLine("Error executing stored procedure: " + ex.Message);
                }
            }
        }

        return results;
    }

    public async Task<bool> ExecuteStoredProcedureWithTransaction(string storedProcedureName, SqlParameter[] parameters)
    {
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();

            try
            {
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = storedProcedureName;
                    command.Parameters.AddRange(parameters);

                    // Output parameter for success/failure
                    SqlParameter outputParam = new SqlParameter("@Success", SqlDbType.Bit);
                    outputParam.Direction = ParameterDirection.Output;
                    command.Parameters.Add(outputParam);

                    command.ExecuteNonQuery();
                    return (bool)outputParam.Value;
                }
            }
            catch (Exception ex)
            {
                // Rollback transaction if an exception occurs
                Console.WriteLine("Error executing stored procedure with transaction: " + ex.Message);
                return false;
            }
        }
    }

    public async Task<T> ExecuteScalarStoredProcedure<T>(string storedProcedureName, SqlParameter[] parameters = null)
    {
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
            {
                command.CommandType = CommandType.StoredProcedure;

                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }

                try
                {
                    connection.Open();
                    var result = command.ExecuteScalar();
                    return (T)Convert.ChangeType(result, typeof(T));
                }
                catch (Exception ex)
                {
                    // Handle exception as needed
                    Console.WriteLine("Error executing stored procedure: " + ex.Message);
                    return default(T);
                }
            }
        }
    }
    private void MapDataToObject<T>(IDataRecord record, T item)
    {
        for (int i = 0; i < record.FieldCount; i++)
        {
            PropertyInfo property = typeof(T).GetProperty(record.GetName(i), BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
            if (property != null && record[i] != DBNull.Value)
            {
                property.SetValue(item, record[i]);
            }
        }
    }
}
