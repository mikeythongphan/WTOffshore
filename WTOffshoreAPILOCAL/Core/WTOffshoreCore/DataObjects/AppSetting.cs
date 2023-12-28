using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WTOffshoreCore.DataObjects
{
    [Table("AppSetting")]
    public class AppSetting : DataObjectBase
    {

        [MaxLength(1000)]
        public string? Category { get; set; }

        public string? Name { get; set; }

        [MaxLength(1000)]
        public string? Value { get; set; }

    }
}
