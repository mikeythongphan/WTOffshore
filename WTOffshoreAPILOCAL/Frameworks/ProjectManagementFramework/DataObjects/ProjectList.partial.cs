using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementFramework.DataObjects
{
    public partial class ProjectList
    {
        [NotMapped]
        public List<ProjectListComment>? ProjectListComments { get; set; }

    }
}
