CREATE PROCEDURE [dbo].[GETUSERPROPERTYOFFERS]
	-- Add the parameters for the stored procedure here
	@ownerId int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

Select 
(po.Id)Id,
(pd.Id)PropertyDetailId,
p.Address,
p.Suburb,
p.City,
po.Status,
(po.OfferedOn)PropertyOfferedDate,
(pd.ActivatedDate)PropertyActivatedDate,
po.OfferingAmount,
(po.UserId)UserId
from PropertyData p
INNER JOIN PropertyDetail pd 
ON p.Id = pd.PropertyId 
INNER JOIN PropertyOffer po 
ON po.PropertyDetailId = pd.Id
Where po.UserId = @ownerId

END