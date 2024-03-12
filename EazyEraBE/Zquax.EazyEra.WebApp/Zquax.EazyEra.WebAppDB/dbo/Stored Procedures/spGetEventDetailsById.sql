CREATE PROCEDURE spGetEventDetailsById
    @EventId BIGINT
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        EventId,
        Candid_Photographers_Count,
        Candid_Cinematographer_Count,
        Traditional_Photographers_Count,
        Traditional_Videographer_Count,
        Assistant_Photographers_Count,
        Assistant_Videographer_Count,
        Drone_Count,
        EventName,
        ShootLocation,
        EventDate,
        QuickShoots,
        CreatedBy,
        CreatedOn,
        UpdatedBy,
        UpdatedOn,
        IsActive
    FROM 
        EventDetails
    WHERE 
        @EventId = 0 OR EventId = @EventId;
END