using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zquax.EazyEra.Models
{
    public class GetEventDetailsModel
    {
        public long GetEventId { get; set; }
        public long UserId { get; set; }
        public string? TypeOfShooter { get; set; }
        public int Experience { get; set; }
        public bool QuickShoots { get; set; }
        public bool EquimentDetails { get; set; }
        public byte TypeOfWork { get; set; }
        public int LastModifiedBy { get; set; }
        public DateTime LastModifiedOn { get; set; }= DateTime.Now;
    }
    public class GetEventSaveReq
    {  
        public GetEventDetailsModel getEventDetailsModel { get; set; }
        public List<PortfolioDetailsModel> PortfolioDetails { get; set; } = new List<PortfolioDetailsModel>();
    }
    public class PhotographerDetails
    {
        public long GetEventId { get; set; }
        public string? Name { get; set; }
        public string? ProfilePicPath { get; set; }
        public string? TypeOfShooter { get; set; }
        public int Experience { get; set; }
        public bool QuickShoots { get; set; }
        public bool EquimentDetails { get; set; }
        public int NumberOfShoots { get; set; }
        public string[]? galleryImageUrls  { get; set;}
    }
    public class GetEventPortfolioDetails
    {
        public long GetEventId { get; set; }
        public string? Name { get; set; }
        public string? ProfilePicPath { get; set; }
        public string? TypeOfShooter { get; set; }
        public int Experience { get; set; }
        public bool QuickShoots { get; set; }
        public bool EquimentDetails { get; set; }
        public int NumberOfShoots { get; set; }
        public long PortFolioId { get; set; }
        public long PortfolioGetEventId { get; set; }
        public string? Path { get; set; }
        public int TypeOfUpload { get; set; }
    }

}
