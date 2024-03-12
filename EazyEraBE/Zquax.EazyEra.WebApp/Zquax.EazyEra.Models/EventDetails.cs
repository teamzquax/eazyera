using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zquax.EazyEra.Models
{
    public class EventDetails
    {
        public long EventId { get; set; }
        public int CandidPhotographersCount { get; set; } = 0;
        public int CandidCinematographerCount { get; set; } = 0;
        public int TraditionalPhotographersCount { get; set; } = 0;
        public int TraditionalVideographerCount { get; set; } = 0;
        public int AssistantPhotographersCount { get; set; } = 0;
        public int AssistantVideographerCount { get; set; } = 0;
        public int DroneCount { get; set; } = 0;
        public string? EventName { get; set; }
        public string? ShootLocation { get; set; }
        public DateTime EventDate { get; set; } = DateTime.Now;
        public bool QuickShoots { get; set; } = true;
        public long CreatedBy { get; set; } = 0;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public long UpdatedBy { get; set; } = 0;
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
        public bool IsActive { get; set; } = true;
    }
}
