CREATE PROCEDURE spIUEventDetails
    @EventId BIGINT,
    @Candid_Photographers_Count INT,
    @Candid_Cinematographer_Count INT,
    @Traditional_Photographers_Count INT,
    @Traditional_Videographer_Count INT,
    @Assistant_Photographers_Count INT,
    @Assistant_Videographer_Count INT,
    @Drone_Count INT,
    @EventName VARCHAR(500),
    @ShootLocation VARCHAR(5000),
    @EventDate DATETIME,
    @QuickShoots BIT,
    @UpdatedBy BIGINT,
	@Success BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET @Success = 0;

    BEGIN TRANSACTION;

    BEGIN TRY
        IF @EventId = 0
        BEGIN
            -- Insert operation
            INSERT INTO EventDetails (Candid_Photographers_Count, Candid_Cinematographer_Count, Traditional_Photographers_Count, Traditional_Videographer_Count, Assistant_Photographers_Count, Assistant_Videographer_Count, Drone_Count, EventName, ShootLocation, EventDate, QuickShoots, CreatedBy, CreatedOn, UpdatedBy, UpdatedOn, IsActive)
            VALUES (@Candid_Photographers_Count, @Candid_Cinematographer_Count, @Traditional_Photographers_Count, @Traditional_Videographer_Count, @Assistant_Photographers_Count, @Assistant_Videographer_Count, @Drone_Count, @EventName, @ShootLocation, @EventDate, @QuickShoots, @UpdatedBy, GETDATE(), @UpdatedBy, GETDATE(), 1);
        END
        ELSE
        BEGIN
            -- Update operation
            UPDATE EventDetails
            SET Candid_Photographers_Count = @Candid_Photographers_Count,
                Candid_Cinematographer_Count = @Candid_Cinematographer_Count,
                Traditional_Photographers_Count = @Traditional_Photographers_Count,
                Traditional_Videographer_Count = @Traditional_Videographer_Count,
                Assistant_Photographers_Count = @Assistant_Photographers_Count,
                Assistant_Videographer_Count = @Assistant_Videographer_Count,
                Drone_Count = @Drone_Count,
                EventName = @EventName,
                ShootLocation = @ShootLocation,
                EventDate = @EventDate,
                QuickShoots = @QuickShoots,
                UpdatedBy = @UpdatedBy,
                UpdatedOn = GETDATE()
            WHERE EventId = @EventId;
        END

        SET @Success = 1;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        SET @Success = 0;
    END CATCH;
END