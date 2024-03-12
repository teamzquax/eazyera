CREATE PROCEDURE InsertPortfolioDetails
    @PortfolioDetails PortfolioDetailsType READONLY,
    @Success BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    BEGIN TRY
	DELETE FROM PortfolioDetails WHERE GetEventId IN 
	       (SELECT DISTINCT GetEventId FROM @PortfolioDetails)

        INSERT INTO PortfolioDetails (GetEventId, Path, TypeOfUpload)
        SELECT GetEventId, Path, TypeOfUpload
        FROM @PortfolioDetails;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        -- Optionally, you can handle or log the error here
        THROW;
    END CATCH;
END