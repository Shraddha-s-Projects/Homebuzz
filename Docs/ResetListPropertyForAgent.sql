select * from PropertyClaim where OwnerId = 52 OR OwnerId = 72
OR OwnerId = 92 OR OwnerId = 93 OR OwnerId = 94

select * from PropertyDetail where IsClaimed = 1 AND ( OwnerId = 52 OR OwnerId = 72
OR OwnerId = 92 OR OwnerId = 93 OR OwnerId = 94)

select * from PropertyAgent where AgentOptionId = 1 AND( OwnerId = 52 OR OwnerId = 72
OR OwnerId = 92 OR OwnerId = 93 OR OwnerId = 94)

select * from PropertyOwnershipHistory where Action = 1 AND ( FromOwnerId = 52
OR FromOwnerId = 72 OR FromOwnerId = 92 OR FromOwnerId = 93 OR FromOwnerId = 94)

delete from PropertyClaim where OwnerId = 52 OR OwnerId = 72
OR OwnerId = 92 OR OwnerId = 93 OR OwnerId = 94

Update  PropertyDetail Set OwnerId = NULL, IsClaimed = 0 , 
StatusId = 1, Status = 'Not listed' where IsClaimed = 1 AND ( OwnerId = 52 OR OwnerId = 72
OR OwnerId = 92 OR OwnerId = 93 OR OwnerId = 94)

--delete from PropertyAgent where AgentOptionId = 1 AND( OwnerId = 52 OR OwnerId = 72
--OR OwnerId = 92 OR OwnerId = 93 OR OwnerId = 94)


--delete from PropertyOwnershipHistory where Action = 1 AND ( FromOwnerId = 52
--OR FromOwnerId = 72 OR FromOwnerId = 92 OR FromOwnerId = 93 OR FromOwnerId = 94)