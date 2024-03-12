CREATE TABLE [dbo].[luChargeInfo] (
    [ChargeId]                       INT      IDENTITY (1, 1) NOT NULL,
    [Candid_Photographers_Price]     INT      NULL,
    [Candid_Cinematographer_Price]   INT      NULL,
    [Traditional_Photographer_Price] INT      NULL,
    [Assistant_Photographer_Price]   INT      NULL,
    [Assistant_Videographer_Price]   INT      NULL,
    [Drone_Price]                    INT      NULL,
    [LastModifiedBy]                 INT      NULL,
    [LastModifiedOn]                 DATETIME NULL
);

