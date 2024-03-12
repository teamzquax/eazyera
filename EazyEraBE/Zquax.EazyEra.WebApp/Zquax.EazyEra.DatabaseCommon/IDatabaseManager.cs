using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zquax.EazyEra.DatabaseCommon
{
    public interface IDatabaseManager
    {
        public Task<List<T>> ExecuteStoredProcedure<T>(string storedProcedureName, SqlParameter[] parameters = null) where T : new();
        public Task<T> ExecuteScalarStoredProcedure<T>(string storedProcedureName, SqlParameter[] parameters = null);
        public Task<bool> ExecuteStoredProcedureWithTransaction(string storedProcedureName, SqlParameter[] parameters);
    }
}
