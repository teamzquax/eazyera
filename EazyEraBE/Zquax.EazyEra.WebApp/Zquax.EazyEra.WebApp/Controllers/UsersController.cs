using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Zquax.EazyEra.Manager.Users;

namespace Zquax.EazyEra.WebApp.Controllers
{
    [Route("api/users")]
    //[ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserManager _userManager;

        public UsersController(UserManager userManager)
        {
            _userManager = userManager;
        }
        // GET: api/users
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            // You can return some dummy data or an empty list
            return new string[] { "user1", "user2", "user3" };
        }

        // GET: api/users/getuserlist
        [HttpGet("getuserlist")]
        public ActionResult<IEnumerable<string>> GetUserList()
        {
            // Implement your logic here to retrieve the list of users
            // For now, return an empty list
            return new List<string>();
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] UserDetails userDetails)
        {
            // Call manager to handle creating the user
            var result = _userManager.CreateUser(userDetails);
            if (result)
            {
                return Ok("User created successfully.");
            }
            else
            {
                return BadRequest("Failed to create user.");
            }
        }
    }
}
