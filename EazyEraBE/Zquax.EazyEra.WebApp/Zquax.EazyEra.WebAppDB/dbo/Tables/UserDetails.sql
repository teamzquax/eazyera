CREATE TABLE [dbo].[UserDetails] (
    [UserId]         BIGINT        IDENTITY (1, 1) NOT NULL,
    [UserName]       VARCHAR (100) NULL,
    [UserPhoneNo]    VARCHAR (50)  NULL,
    [UserEmail]      VARCHAR (50)  NULL,
    [UserAddress]    VARCHAR (500) NULL,
    [UserAdharNo]    VARCHAR (50)  NULL,
    [CreatedOn]      DATETIME      NULL,
    [LastModifiedBy] INT           NULL,
    [CreatedBy]      INT           NULL
);



