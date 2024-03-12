create PROCEDURE [dbo].[spValidateEmailExists]
    @UserEmail NVARCHAR(50),
    @Success BIT OUTPUT
AS
BEGIN
    IF EXISTS (SELECT 1 FROM UserDetails WHERE UserEmail = @UserEmail)
         SET @Success = 1; -- Phone number exists
    ELSE
         SET @Success = 0; -- Phone number does not exist
END