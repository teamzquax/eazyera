CREATE TABLE [dbo].[GetEventDetails] (
    [GetEventId]      BIGINT   IDENTITY (1, 1) NOT NULL,
    [TypeOfShooter]   TINYINT  NOT NULL,
    [Experience]      TINYINT  NOT NULL,
    [QuickShoots]     BIT      NOT NULL,
    [EquimentDetails] BIT      NOT NULL,
    [TypeOfWork]      TINYINT  NOT NULL,
    [LastModifiedBy]  INT      NOT NULL,
    [LastModifiedOn]  DATETIME CONSTRAINT [DF_GetEventDetails_LastModifiedOn] DEFAULT (getdate()) NOT NULL, 
    CONSTRAINT [PK_GetEventDetails] PRIMARY KEY ([GetEventId])
);