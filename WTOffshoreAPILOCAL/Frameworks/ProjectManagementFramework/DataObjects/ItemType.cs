using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{
    [Table("ItemType")]
    public partial class ItemType : DataObjectBase
    {

        [Required]
        [StringLength(50)]
        public required string ItemTypeName { get; set; }

        public bool IsCurrent { get; set; }
    }
}
