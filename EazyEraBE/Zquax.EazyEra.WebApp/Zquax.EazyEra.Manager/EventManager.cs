using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zquax.EazyEra.Models;
using Zquax.EazyEra.Repository.Interfaces;

namespace Zquax.EazyEra.Manager
{
    public class EventManager
    {
        private readonly IEventDetailsRepository _eventDetailsRepository;

        public EventManager(IEventDetailsRepository eventDetailsRepository)
        {
            _eventDetailsRepository = eventDetailsRepository;
        }
        public async Task<bool> InsertEvent(EventDetails eventDetails)
        {
           return await _eventDetailsRepository.InsertEvent(eventDetails);
        }

        public async Task<bool> InsertGetEvent(GetEventSaveReq eventDetails)
        {
            return await _eventDetailsRepository.InsertGetEvent(eventDetails);
        }

        public async Task<List<EventDetails>> GetEventById(long eventId)
        {
            return await _eventDetailsRepository.GetEventById(eventId);
        }
        public Task<List<PhotographerDetails>> GetEventPortfolioDetails(int TypeOfWork)
        {
            return _eventDetailsRepository.GetEventPortfolioDetails(TypeOfWork);
        }
    }
}
