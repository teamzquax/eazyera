using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zquax.EazyEra.Models;

namespace Zquax.EazyEra.Repository.Interfaces
{
    public interface IEventDetailsRepository
    {
        Task<bool> InsertEvent(EventDetails eventDetails);
        Task<bool> InsertGetEvent(GetEventSaveReq   eventDetails);
        Task<List<EventDetails>> GetEventById(long eventId);
        Task<List<PhotographerDetails>> GetEventPortfolioDetails(int TypeOfWork);
    }
}
