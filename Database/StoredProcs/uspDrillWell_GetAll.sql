IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[uspDrillWell_GetAll]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[uspDrillWell_GetAll]
GO

CREATE procedure [dbo].[uspDrillWell_GetAll]
as

SELECT dw.Id
      ,ProjectCd
      ,ProjectStatusId
	  ,projectStatus.ItemName as ProjectStatus
      ,AreaId
	  ,area.ItemName as Area
      ,FieldProspect
      ,Reservoir
      ,WellProject
      ,ResponsiblePartyId
	  ,responsibleParty.ItemName as ResponsibleParty
      ,GeologistId
	  ,geologist.ItemName as Geologist
      ,WaterDepth
      ,BudgetYearId
	  ,budgetYear.ItemName as BudgetYear
      ,BudgetCategoryId
	  ,budgetCategory.ItemName as BudgetCategory
      ,ProjectClassificationId
	  ,projectClassification.ItemName as ProjectClassification
      ,ProjectMaturityId
	  ,projectMaturity.ItemName as ProjectMaturity
      ,WI
      ,LeaseExpiration
      ,ScreeningEconomics
      ,TechnicalEvaluation
      ,PeerReview
      ,AfeQualityCost
      ,TechnicalReview
      ,ExecutiveManagementReview
      ,RegulatorySubmit
      ,RegulatoryApproval
      ,AfeApprovalTarget
      ,AFE
      ,AnticipatedIP
      ,Comments
      ,ExecuteFirstSpend
      ,ModifiedBy
      ,ModifiedOn
from DrillWell dw
left join DropdownItem projectStatus on projectStatus.Id = dw.ProjectStatusId
left join DropdownItem area on area.Id = dw.AreaId
left join DropdownItem responsibleParty on responsibleParty.Id = dw.ResponsiblePartyId
left join DropdownItem geologist on geologist.Id = dw.GeologistId
left join DropdownItem budgetYear on budgetYear.Id = dw.BudgetYearId
left join DropdownItem budgetCategory on budgetCategory.Id = dw.BudgetCategoryId
left join DropdownItem projectClassification on projectClassification.Id = dw.ProjectClassificationId
left join DropdownItem projectMaturity on projectMaturity.Id = dw.ProjectMaturityId
