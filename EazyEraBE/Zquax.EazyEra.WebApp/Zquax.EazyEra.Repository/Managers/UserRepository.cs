using Zquax.EazyEra.Repository.Interfaces;
using System.Data.SqlClient;
using Zquax.EazyEra.DatabaseCommon;


namespace Zquax.EazyEra.Repository.Managers
{
    public class UserRepository : IUserRepository
    {
        private readonly IDatabaseManager _context;

        public UserRepository(IDatabaseManager context)
        {
            _context = context;
        }

        public async Task<bool> CreateUser(UserDetails userDetails)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@UserId", userDetails.UserId),
                    new SqlParameter("@FullName", userDetails.FullName),
                    new SqlParameter("@Email", userDetails.Email),
                    new SqlParameter("@PhoneNumber", userDetails.PhoneNumber),
                    new SqlParameter("@AdharNo", userDetails.AdharNo),
                    new SqlParameter("@AdharPath", userDetails.AdharPath),
                    new SqlParameter("@ProfilePicPath", userDetails.LastModifiedBy),
                    new SqlParameter("@CurrentAddress", userDetails.CurrentAddress),
                    new SqlParameter("@CompanyName", userDetails.CompanyName),
                    new SqlParameter("@LastModifiedBy", userDetails.LastModifiedBy)
                };

                // Assuming _context is your DbContext instance and _databaseManager is the DatabaseManager instance
                return await _context.ExecuteStoredProcedureWithTransaction("spIUUserDetails", parameters);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }
        }
        public async Task<bool> ValidatePhoneNumberExists(string phoneNumber)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@UserPhoneNo", phoneNumber)
                };

                // Assuming _context is your DbContext instance and _databaseManager is the DatabaseManager instance
                return await _context.ExecuteStoredProcedureWithTransaction("spValidatePhoneNumberExists", parameters);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }
        }

        public async Task<bool> ValidateEmailExists(string Email)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@UserEmail", Email)
                };

                // Assuming _context is your DbContext instance and _databaseManager is the DatabaseManager instance
                return await _context.ExecuteStoredProcedureWithTransaction("spValidateEmailExists", parameters);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }
        }

        public async Task<int> AuthenticateUser(string phoneNumber)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@UserPhoneNo", phoneNumber)
                };
                return await _context.ExecuteScalarStoredProcedure<int>("spAuthenticateUser", parameters);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
