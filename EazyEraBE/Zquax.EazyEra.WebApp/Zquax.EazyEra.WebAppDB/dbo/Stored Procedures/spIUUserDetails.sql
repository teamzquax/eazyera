-- =============================================
-- Author:      <N kirn Kumar>
-- Create Date: 10-02-24
-- Description: this sp is used for inserting the user details from sign up page
-- =============================================
CREATE PROCEDURE spIUUserDetails
    @UserId BIGINT = NULL,
    @UserName NVARCHAR(100),
    @UserPhoneNo NVARCHAR(50),
    @UserEmail NVARCHAR(50),
    @UserAddress NVARCHAR(500),
    @UserAdharNo NVARCHAR(50),
    @LastModifiedBy NVARCHAR(100),
    @Success BIT OUTPUT
AS
BEGIN
    BEGIN TRY
	
        IF @UserId !=0
        BEGIN
            -- Update existing user
            UPDATE UserDetails
            SET UserName = @UserName,
                UserPhoneNo = @UserPhoneNo,
                UserEmail = @UserEmail,
                UserAddress = @UserAddress,
                UserAdharNo = @UserAdharNo,
                LastModifiedBy = @LastModifiedBy
            WHERE UserId = @UserId;
        END
        ELSE
        BEGIN
		select @UserId
            -- Insert new user
            INSERT INTO UserDetails (UserName, UserPhoneNo, UserEmail, UserAddress, UserAdharNo, CreatedOn, LastModifiedBy,CreatedBy)
            VALUES (@UserName, @UserPhoneNo, @UserEmail, @UserAddress, @UserAdharNo, GETDATE(), @LastModifiedBy,@LastModifiedBy);
        END
        
        -- Set output parameter to true indicating success
        SET @Success = 1;
    END TRY
    BEGIN CATCH
        -- Set output parameter to false indicating failure
        SET @Success = 0;
    END CATCH
END