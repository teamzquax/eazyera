using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zquax.EazyEra.DatabaseCommon;
using Zquax.EazyEra.Models;
using Zquax.EazyEra.Repository.Interfaces;

namespace Zquax.EazyEra.Repository.Managers
{
    public class EventDetailsRepository : IEventDetailsRepository
    {
        private readonly IDatabaseManager _context;

        public EventDetailsRepository(IDatabaseManager context)
        {
            _context = context;
        }
        public async Task<List<EventDetails>> GetEventById(long eventId)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@EventId", eventId)
                };

                // Assuming _context is your DbContext instance and _databaseManager is the DatabaseManager instance
                return await _context.ExecuteStoredProcedure< EventDetails>("spGetEventDetailsById", parameters);
            }
            catch (Exception)
            {
                // Handle exceptions
                return null;
            }
        }

        public async Task<List<PhotographerDetails>> GetEventPortfolioDetails(int TypeOfWork)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@TypeOfWork", TypeOfWork)
                };

                var data= await _context.ExecuteStoredProcedure<GetEventPortfolioDetails>("spGetPhotographerDetails", parameters);
                List<PhotographerDetails> photographerDetailsList = new List<PhotographerDetails>();

                var groupedData = data.GroupBy(d => d.GetEventId);

                foreach (var group in groupedData)
                {
                    var eventDetails = group.First(); // Use the first item in the group for event details
                    var portfolioDetails = group.Where(x => x.PortfolioGetEventId == eventDetails.GetEventId).Select(g => g.Path).ToArray();

                    // Create GetEventSaveReq object

                    PhotographerDetails photographerDetails = new PhotographerDetails
                    {
                        GetEventId = eventDetails.GetEventId,
                        TypeOfShooter = eventDetails.TypeOfShooter,
                        Experience = eventDetails.Experience,
                        QuickShoots = eventDetails.QuickShoots,
                        EquimentDetails = eventDetails.EquimentDetails,
                        galleryImageUrls = portfolioDetails,
                        Name = eventDetails.Name,
                    };

                    // Add the created object to the list
                    photographerDetailsList.Add(photographerDetails);
                }

                return photographerDetailsList;
            
            }
            catch (Exception)
            {
                // Handle exceptions
                return null;
            }
        }

        public async Task<bool> InsertEvent(EventDetails eventDetails)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                   new SqlParameter("@EventId", eventDetails.EventId),
                   new SqlParameter("@Candid_Photographers_Count", eventDetails.CandidPhotographersCount),
                   new SqlParameter("@Candid_Cinematographer_Count", eventDetails.CandidCinematographerCount),
                   new SqlParameter("@Traditional_Photographers_Count", eventDetails.TraditionalPhotographersCount),
                   new SqlParameter("@Traditional_Videographer_Count", eventDetails.TraditionalVideographerCount),
                   new SqlParameter("@Assistant_Photographers_Count", eventDetails.AssistantPhotographersCount),
                   new SqlParameter("@Assistant_Videographer_Count", eventDetails.AssistantVideographerCount),
                   new SqlParameter("@Drone_Count", eventDetails.DroneCount),
                   new SqlParameter("@EventName", eventDetails.EventName),
                   new SqlParameter("@ShootLocation", eventDetails.ShootLocation),
                   new SqlParameter("@EventDate", eventDetails.EventDate),
                   new SqlParameter("@QuickShoots", eventDetails.QuickShoots),
                   new SqlParameter("@UpdatedBy", eventDetails.UpdatedBy),
                };
                return await _context.ExecuteStoredProcedureWithTransaction("spIUEventDetails", parameters);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }


        }

        public async Task<bool> InsertGetEvent(GetEventSaveReq eventDetails)
        {
            try
            {
                SqlParameter[] parameters = new SqlParameter[]
                {
                   new SqlParameter("@GetEventId", eventDetails.getEventDetailsModel.GetEventId),
                   new SqlParameter("@TypeOfShooter", eventDetails.getEventDetailsModel.TypeOfShooter),
                   new SqlParameter("@Experience", eventDetails.getEventDetailsModel.Experience),
                   new SqlParameter("@QuickShoots", eventDetails.getEventDetailsModel.QuickShoots),
                   new SqlParameter("@EquimentDetails", eventDetails.getEventDetailsModel.EquimentDetails),
                   new SqlParameter("@TypeOfWork", eventDetails.getEventDetailsModel.TypeOfWork),
                   new SqlParameter("@LastModifiedBy", eventDetails.getEventDetailsModel.LastModifiedBy),
                   new SqlParameter("@UserId", eventDetails.getEventDetailsModel.UserId),
                };
                var id= await _context.ExecuteScalarStoredProcedure<int>("InsertOrUpdateGetEventDetails", parameters);
                if(eventDetails.getEventDetailsModel.GetEventId==0)
                    eventDetails.getEventDetailsModel.GetEventId=id;
                return await InsertUpdatePortfoliao(eventDetails.PortfolioDetails, eventDetails.getEventDetailsModel.GetEventId);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }
        }

        public async Task<bool> InsertUpdatePortfoliao(List<PortfolioDetailsModel> portfolioDetailsList, long getEventId)
        {
            try
            {
                DataTable dt = new DataTable();
                dt.Columns.Add("GetEventId", typeof(long));
                dt.Columns.Add("Path", typeof(string));
                dt.Columns.Add("TypeOfUpload", typeof(byte));

                foreach (var portfolioDetail in portfolioDetailsList)
                {
                    dt.Rows.Add(getEventId, portfolioDetail.Path, portfolioDetail.TypeOfUpload);
                }

                // Create table-valued parameter
                SqlParameter parameter = new SqlParameter("@PortfolioDetails", SqlDbType.Structured);
                parameter.Value = dt;
                parameter.TypeName = "dbo.PortfolioDetailsType"; // Adjust to match your actual table type name
                SqlParameter[] parameters = new SqlParameter[1];
                parameters[0] = parameter;
                return await _context.ExecuteStoredProcedureWithTransaction("InsertPortfolioDetails", parameters);
            }
            catch (Exception)
            {
                // Handle exceptions
                return false;
            }
        }
    }
}
