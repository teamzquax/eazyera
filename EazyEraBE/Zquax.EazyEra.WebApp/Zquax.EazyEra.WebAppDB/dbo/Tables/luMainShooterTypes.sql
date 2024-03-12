CREATE TABLE [dbo].[luMainShooterTypes] (
    [MainShooterType]     INT           IDENTITY (1, 1) NOT NULL,
    [MainShooterTypeName] VARCHAR (500) NULL,
    [IsActive]            BIT           NULL,
    [LastModifiedOn]      DATETIME      CONSTRAINT [DF_luMainShooterTypes_LastModifiedOn] DEFAULT (getdate()) NOT NULL
);

