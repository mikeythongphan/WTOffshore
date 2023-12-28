using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementFramework.DataObjects
{
    public class ProjectListExt : ProjectList
    {
        public string? ProjectStatus { get; set; }
        public string? Area { get; set; }
        public string? BudgetCategory { get; set; }
        public string? ResponsibleParty { get; set; }
        public string? ReservoirEngineer { get; set; }
        public string? BudgetYear { get; set; }
        public string? ProjectClassification { get; set; }
        public string? ProjectMaturity { get; set; }
        public string? Operator { get; set; }
        public string? WellStatus { get; set; }
    }
}
