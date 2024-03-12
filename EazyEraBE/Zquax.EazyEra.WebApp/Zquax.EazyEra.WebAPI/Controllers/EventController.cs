using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Zquax.EazyEra.Manager;
using Zquax.EazyEra.Models;

namespace Zquax.EazyEra.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly EventManager _eventDetailsManager;

        public EventController(EventManager userManager)
        {
            _eventDetailsManager = userManager;
        }
        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] EventDetails eventDetails)
        {
            // Code to create a new event
            var result = await _eventDetailsManager.InsertEvent(eventDetails);
            if (result)
            {
                return Ok("Event created successfully.");
            }
            else
            {
                return BadRequest("Failed to create Event.");
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateEvent([FromBody] EventDetails eventDetails)
        {
            // Code to update an existing event
            var existingEvent = await _eventDetailsManager.GetEventById(eventDetails.EventId);
            if (existingEvent == null)
                return NotFound();

            eventDetails.EventId = eventDetails.EventId;
            var result = await _eventDetailsManager.InsertEvent(eventDetails);
            if (result)
            {
                return Ok("Event created successfully.");
            }
            else
            {
                return BadRequest("Failed to create Event.");
            }
        }

        [HttpGet("{eventId}")]
        public async Task<IActionResult> GetEvent(long eventId)
        {
            // Code to retrieve an event by ID
            var eventDetails = await _eventDetailsManager.GetEventById(eventId);
            if (eventDetails == null)
                return NotFound();

            return Ok(eventDetails);
        }

        [HttpPost]
        [Route("InsertPhotographerDetails")]
        public async Task<IActionResult> CreateGetEvent([FromBody] GetEventSaveReq eventDetails)
        {
            // Code to create a new event
            var result = await _eventDetailsManager.InsertGetEvent(eventDetails);
            if (result)
            {
                return Ok("Event created successfully.");
            }
            else
            {
                return BadRequest("Failed to create Event.");
            }
        }
        [HttpGet]
    [Route("GetPhotographerDetails/{typeOfWork}")]
    public async Task<IActionResult> GetPhotographerDetails(int typeOfWork)
    {
        // Code to retrieve an event by ID
        var eventDetails = await _eventDetailsManager.GetEventPortfolioDetails(typeOfWork);
        if (eventDetails == null)
            return NotFound();

        return Ok(eventDetails);
    }
}
}