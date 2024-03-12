CREATE TABLE [dbo].[PortfolioDetails] (
    [PortFolioId]  BIGINT        IDENTITY (1, 1) NOT NULL,
    [GetEventId]   BIGINT        NOT NULL,
    [Path]         VARCHAR (500) NOT NULL,
    [TypeOfUpload] TINYINT       NOT NULL,    

    CONSTRAINT [FK_PortfolioDetails_GetEventDetails] FOREIGN KEY ([GetEventId])
    REFERENCES [dbo].[GetEventDetails]([GetEventId])
);

