using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zquax.EazyEra.Models
{
    public class PortfolioDetailsModel
    {
        public long PortFolioId { get; set; }
        public long GetEventId { get; set; }
        public string Path { get; set; }
        public byte TypeOfUpload { get; set; }
    }
}
