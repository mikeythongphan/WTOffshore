IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[uspProjectList_GetAll]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[uspProjectList_GetAll]
GO


CREATE procedure [dbo].[uspProjectList_GetAll]
as

SELECT pl.Id
      ,ProjectCd
      ,ProjectStatusId
	  ,projectStatus.ItemName as ProjectStatus
      ,AreaId
	  ,area.ItemName as Area
      ,FieldProspect
	  ,CreatedDate
      ,TestDate
	  ,ExpectedVolume_NetBOE
	  ,ExpectedRate_NetBOED
      ,WellProject
      ,ResponsiblePartyId
	  ,responsibleParty.ItemName as ResponsibleParty
      ,OperatorId
	  ,operator.ItemName as Operator
      ,WellStatusId
	  ,wellStatus.ItemName as WellStatus
      ,BudgetYearId
	  ,budgetYear.ItemName as BudgetYear
      ,BudgetCategoryId
	  ,budgetCategory.ItemName as BudgetCategory
      ,ProjectClassificationId
	  ,projectClassification.ItemName as ProjectClassification
      ,ProjectMaturityId
	  ,projectMaturity.ItemName as ProjectMaturity
      ,WI
	  ,AfeReview
      ,ReservoirEngineerId
	  ,reservoirEngineer.ItemName as ReservoirEngineer
      ,ScreeningEconomics
      ,TechnicalEvaluation
      ,PeerReview
	  ,ProductionEngineeringPeerReview
	  ,ReservoirEngineeringPeerReview
      ,AfeQualityCost
      ,TechnicalReview
      ,LastOil_Bbl
      ,LastGas_Mcf
      ,LastWater_Bb
      ,Rio_ID
	  ,NSAI_PNP
	  ,NSAI_PRB
	  ,NSAI_POS
      ,AFE
	  ,CommercialReadiness
	  ,Budgeted
      ,AnticipatedIP
	  ,PermitApproval
      ,Comments
      ,ExecuteFirstSpend
	  ,ResponsiblePartyRole
      ,ModifiedBy
      ,ModifiedOn
from ProjectList pl
left join DropdownItem projectStatus on projectStatus.Id = pl.ProjectStatusId
left join DropdownItem area on area.Id = pl.AreaId
left join DropdownItem responsibleParty on responsibleParty.Id = pl.ResponsiblePartyId
left join DropdownItem operator on operator.Id = pl.OperatorId
left join DropdownItem wellStatus on wellStatus.Id = pl.WellStatusId
left join DropdownItem reservoirEngineer on reservoirEngineer.Id = pl.ReservoirEngineerId
left join DropdownItem budgetYear on budgetYear.Id = pl.BudgetYearId
left join DropdownItem budgetCategory on budgetCategory.Id = pl.BudgetCategoryId
left join DropdownItem projectClassification on projectClassification.Id = pl.ProjectClassificationId
left join DropdownItem projectMaturity on projectMaturity.Id = pl.ProjectMaturityId
GO


