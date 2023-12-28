using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{

    public class DrillWellExt : DrillWell
    {
        public string? ProjectStatus { get; set; }
        public string? Area { get; set; }
        public string? ResponsibleParty { get; set; }
        public string? Geologist { get; set; }
        public string? BudgetYear { get; set; }
        public string? BudgetCategory { get; set; }
        public string? ProjectClassification { get; set; }
        public string? ProjectMaturity { get; set; }

    }
}
