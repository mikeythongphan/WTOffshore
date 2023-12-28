using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{

    public partial class DrillWell
    {
        [NotMapped]
        public List<DrillWellComment>? DrillWellComments { get; set; }

    }
}
