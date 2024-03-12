using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Zquax.EazyEra.Manager.Users;
using Zquax.EazyEra.Repository.Managers;

namespace Zquax.EazyEra.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserManager _userManager;

        public UsersController(UserManager userManager)
        {
            _userManager = userManager;
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserDetails userDetails)
        {
            // Call manager to handle creating the user
            var result = await _userManager.CreateUser(userDetails);
            if (result)
            {
                return Ok("User created successfully.");
            }
            else
            {
                return BadRequest("Failed to create user.");
            }
        }

        [HttpGet("ValidatePhoneNumber")]
        public async Task<IActionResult> ValidatePhoneNumber([FromQuery] string phoneNumber)
        {
            if (string.IsNullOrEmpty(phoneNumber))
            {
                return BadRequest("Phone number cannot be empty");
            }

            bool isPhoneNumberExists = await _userManager.ValidatePhoneNumberExists(phoneNumber);

            return Ok(isPhoneNumberExists);
        }

        [HttpGet("ValidateEmailExists")]
        public async Task<IActionResult> ValidateEmail([FromQuery] string Email)
        {
            if (string.IsNullOrEmpty(Email))
            {
                return BadRequest("Phone number cannot be empty");
            }

            bool isPhoneNumberExists = await _userManager.ValidateEmailExists(Email);

            return Ok(isPhoneNumberExists);
        }

        [HttpGet("AuthinticateUser")]
        public async Task<IActionResult> AuthinticateUser([FromQuery] string phoneNumber)
        {
            if (string.IsNullOrEmpty(phoneNumber))
            {
                return BadRequest("Phone number cannot be empty");
            }

            int isPhoneNumberExists = await _userManager.AuthinticateUser(phoneNumber);

            return Ok(isPhoneNumberExists);
        }
    }
}
