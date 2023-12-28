using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WTOffshoreCore.DataObjects;

namespace ProjectManagementFramework.DataObjects
{

    [Table("DrillWellComment")]
    public partial class DrillWellComment : DataObjectBase
    {

        public int? DrillWellId { get; set; }

        [StringLength(1024)]
        public string? Comment { get; set; }

        public DateTime? CommentDate { get; set; }

        public int? CommentIdx { get; set; }

        [StringLength(25)]
        public string? CommentSrc { get; set; }

        [StringLength(50)]
        public string? ModifiedBy { get; set; }

        public DateTime ModifiedOn { get; set; }
    }
}
