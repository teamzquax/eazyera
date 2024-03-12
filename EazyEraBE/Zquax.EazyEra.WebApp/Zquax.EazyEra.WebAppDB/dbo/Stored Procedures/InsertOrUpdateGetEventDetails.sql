CREATE PROCEDURE InsertOrUpdateGetEventDetails
    @GetEventId BIGINT=0,
    @TypeOfShooter TINYINT,
    @Experience TINYINT,
    @QuickShoots BIT,
    @EquimentDetails BIT,
    @TypeOfWork TINYINT,
    @LastModifiedBy INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    BEGIN TRY
        -- Check if the GetEventId already exists
        IF EXISTS (SELECT 1 FROM GetEventDetails WHERE GetEventId = @GetEventId)
        BEGIN
            -- Update existing record
            UPDATE GetEventDetails
            SET TypeOfShooter = @TypeOfShooter,
                Experience = @Experience,
                QuickShoots = @QuickShoots,
                EquimentDetails = @EquimentDetails,
                TypeOfWork = @TypeOfWork,
                LastModifiedBy = @LastModifiedBy,
                LastModifiedOn = GETDATE()
            WHERE GetEventId = @GetEventId;
        END
        ELSE
        BEGIN
            -- Insert new record
            INSERT INTO GetEventDetails (TypeOfShooter, Experience, QuickShoots, EquimentDetails, TypeOfWork, LastModifiedBy, LastModifiedOn)
            VALUES (@TypeOfShooter, @Experience, @QuickShoots, @EquimentDetails, @TypeOfWork, @LastModifiedBy, GETDATE());

            -- Retrieve the newly inserted GetEventId
            SET @GetEventId = SCOPE_IDENTITY();
        END
		select @GetEventId

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        -- Optionally, you can handle or log the error here
        THROW;
    END CATCH;
END