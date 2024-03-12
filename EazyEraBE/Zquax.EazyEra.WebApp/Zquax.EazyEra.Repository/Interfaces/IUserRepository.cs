using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zquax.EazyEra.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<bool> CreateUser(UserDetails userDetails);
        Task<bool> ValidatePhoneNumberExists(string phoneNumber);
        Task<bool> ValidateEmailExists(string phoneNumber);
        Task<int> AuthenticateUser(string phoneNumber);
    }
}
