using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{

    [Table("DrillWell")]
    public partial class DrillWell : DataObjectBase
    {

        [StringLength(25)]
        public string? ProjectCd { get; set; }

        public int? ProjectStatusId { get; set; }

        public int? AreaId { get; set; }

        [StringLength(150)]
        public string? FieldProspect { get; set; }

        [StringLength(150)]
        public string? Reservoir { get; set; }

        [StringLength(150)]
        public string? WellProject { get; set; }

        public int? ResponsiblePartyId { get; set; }

        public int? GeologistId { get; set; }

        public int? WaterDepth { get; set; }

        public int? BudgetYearId { get; set; }

        public int? BudgetCategoryId { get; set; }

        public int? ProjectClassificationId { get; set; }

        public int? ProjectMaturityId { get; set; }

        public double? WI { get; set; }

        [StringLength(25)]
        public string? LeaseExpiration { get; set; }

        [StringLength(25)]
        public string? ScreeningEconomics { get; set; }

        [StringLength(25)]
        public string? TechnicalEvaluation { get; set; }

        [StringLength(25)]
        public string? PeerReview { get; set; }

        [StringLength(25)]
        public string? AfeQualityCost { get; set; }

        [StringLength(25)]
        public string? TechnicalReview { get; set; }

        [StringLength(25)]
        public string? ExecutiveManagementReview { get; set; }

        [StringLength(25)]
        public string? RegulatorySubmit { get; set; }

        [StringLength(25)]
        public string? RegulatoryApproval { get; set; }

        [StringLength(25)]
        public string? AfeApprovalTarget { get; set; }

        [StringLength(50)]
        public string? AFE { get; set; }

        [StringLength(25)]
        public string? AnticipatedIP { get; set; }

        [StringLength(255)]
        public string? Comments { get; set; }

        [StringLength(25)]
        public string? ExecuteFirstSpend { get; set; }

        [StringLength(50)]
        public string? ModifiedBy { get; set; }

        public DateTime ModifiedOn { get; set; }
    }
}
