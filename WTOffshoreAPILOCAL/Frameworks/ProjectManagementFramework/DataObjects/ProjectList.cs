using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{
    [Table("ProjectList")]
    public partial class ProjectList : DataObjectBase
    {
        [StringLength(25)]
        public string? ProjectCd { get; set; }

        public int? ProjectStatusId { get; set; }

        public int? AreaId { get; set; }

        [StringLength(150)]
        public string? FieldProspect { get; set; }

        [StringLength(150)]
        public string? WellProject { get; set; }

        public int? BudgetCategoryId { get; set; }

        public int? ResponsiblePartyId { get; set; }

        public int? ReservoirEngineerId { get; set; }

        public int? BudgetYearId { get; set; }

        [StringLength(5)]
        public string? Budgeted { get; set; }

        public double? ExpectedVolume_NetBOE { get; set; }

        public double? ExpectedRate_NetBOED { get; set; }

        [StringLength(25)]
        public string? AnticipatedIP { get; set; }

        public int? ProjectClassificationId { get; set; }

        public int? ProjectMaturityId { get; set; }

        public double? WI { get; set; }

        public int? OperatorId { get; set; }

        public int? WellStatusId { get; set; }

        [StringLength(25)]
        public string? TechnicalReview { get; set; }

        [StringLength(25)]
        public string? PeerReview { get; set; }

        [StringLength(25)]
        public string? AfeReview { get; set; }

        [StringLength(25)]
        public string? PermitApproval { get; set; }

        [StringLength(50)]
        public string? AFE { get; set; }

        [StringLength(25)]
        public string? ExecuteFirstSpend { get; set; }

        [StringLength(25)]
        public string? AfeQualityCost { get; set; }

        [StringLength(25)]
        public string? ResponsiblePartyRole { get; set; }

        [StringLength(25)]
        public string? ProductionEngineeringPeerReview { get; set; }

        [StringLength(25)]
        public string? ReservoirEngineeringPeerReview { get; set; }

        [StringLength(25)]
        public string? ScreeningEconomics { get; set; }

        [StringLength(25)]
        public string? TechnicalEvaluation { get; set; }

        [StringLength(255)]
        public string? Comments { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? TestDate { get; set; }

        [StringLength(25)]
        public string? CommercialReadiness { get; set; }

        public double? LastOil_Bbl { get; set; }

        public double? LastGas_Mcf { get; set; }

        public double? LastWater_Bb { get; set; }

        [StringLength(25)]
        public string? Rio_ID { get; set; }

        [StringLength(25)]
        public string? NSAI_PNP { get; set; }

        [StringLength(25)]
        public string? NSAI_PRB { get; set; }

        [StringLength(25)]
        public string? NSAI_POS { get; set; }

        [StringLength(50)]
        public required string ModifiedBy { get; set; }

        public DateTime ModifiedOn { get; set; }
    }
}
