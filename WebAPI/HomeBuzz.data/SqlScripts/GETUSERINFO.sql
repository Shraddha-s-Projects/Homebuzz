CREATE PROCEDURE [dbo].[GETUSERINFO]
	-- Add the parameters for the stored procedure here
	@userId int = 30
AS
BEGIN
	SET NOCOUNT ON;

select 
UserId,Email, FirstName,ProfilePicPath,IsEmailVerified,
(select COUNT(Id) from PropertyLike where UserId = @userId)likes,
(select COUNT(Id) from PropertyOffer where UserId = @userId)offers,
(select COUNT(Id) from PropertyClaim where OwnerId = @userId)claims,
(select COUNT(Id) from PropertySearchHistory where UserId = @userId and IsDeleted = 0)searches
 from Users Where UserId = @userId
END