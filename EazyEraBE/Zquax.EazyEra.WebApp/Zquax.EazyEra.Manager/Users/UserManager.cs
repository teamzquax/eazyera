using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zquax.EazyEra.Repository.Interfaces;

namespace Zquax.EazyEra.Manager.Users
{
    public class UserManager
    {
        private readonly IUserRepository _userRepository;

        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> CreateUser(UserDetails userDetails)
        {
            return await _userRepository.CreateUser(userDetails);
        }

        public async Task<bool> ValidatePhoneNumberExists(string phoneNumber)
        {
            try
            {
                return await _userRepository.ValidatePhoneNumberExists(phoneNumber);
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
                return await _userRepository.ValidateEmailExists(Email);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }
        }

        public async Task<int> AuthinticateUser(string phoneNumber)
        {
            try
            {
                return await _userRepository.AuthenticateUser(phoneNumber);
            }
            catch (Exception)
            {
                // Handle exceptions
                return 0;
            }
        }
    }

}
