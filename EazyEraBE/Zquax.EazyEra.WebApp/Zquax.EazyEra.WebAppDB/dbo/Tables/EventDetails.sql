CREATE TABLE [dbo].[EventDetails] (
    [EventId]                         BIGINT         IDENTITY (1, 1) NOT NULL,
    [Candid_Photographers_Count]      INT            NOT NULL DEFAULT 0,
    [Candid_Cinematographer_Count]    INT            NOT NULL DEFAULT 0,
    [Traditional_Photographers_Count] INT            NOT NULL DEFAULT 0,
    [Traditional_Videographer_Count]  INT            NOT NULL DEFAULT 0,
    [Assistant_Photographers_Count]   INT            NOT NULL DEFAULT 0,
    [Assistant_Videographer_Count]    INT            NOT NULL DEFAULT 0,
    [Drone_Count]                     INT            NOT NULL DEFAULT 0,
    [EventName]                       VARCHAR (500)  NULL,
    [ShootLocation]                   VARCHAR (5000) NULL,
    [EventDate]                       DATETIME       NOT NULL DEFAULT getdate(), -- or any other default date you prefer
    [QuickShoots]                     BIT            NOT NULL DEFAULT 1,
    [CreatedBy]                       BIGINT         NOT NULL DEFAULT 0,
    [CreatedOn]                       DATETIME       NOT NULL DEFAULT getdate(), -- or any other default date you prefer
    [UpdatedBy]                       BIGINT         NOT NULL DEFAULT 0,
    [updatedOn]                       DATETIME       NOT NULL DEFAULT getdate(), -- or any other default date you prefer
    [IsActive]                        BIT            NOT NULL DEFAULT 1
);
