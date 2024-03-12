CREATE TABLE [dbo].[luSubShooterType] (
    [SubShooterTypeId]   INT           IDENTITY (1, 1) NOT NULL,
    [MainShooterTypeId]  INT           NOT NULL,
    [SubShooterTypeName] VARCHAR (500) NULL,
    [IsActive]           BIT           NULL,
    [LastModifiedOn]     DATETIME      CONSTRAINT [DF_luSubShooterType_LastModifiedOn] DEFAULT (getdate()) NOT NULL
);

