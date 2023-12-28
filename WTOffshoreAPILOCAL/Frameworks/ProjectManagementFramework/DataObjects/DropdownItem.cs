using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{
    [Table("DropdownItem")]
    public partial class DropdownItem : DataObjectBase
    {

        public int ItemTypeId { get; set; }

        [Required]
        [StringLength(255)]
        public required string ItemName { get; set; }

        public bool IsCurrent { get; set; }
    }
}
