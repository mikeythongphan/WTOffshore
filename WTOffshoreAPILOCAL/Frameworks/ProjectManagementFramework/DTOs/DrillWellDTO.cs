using ProjectManagementFramework.DataObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementFramework.DTOs
{
    public class DrillWellDTO
    {
        public DrillWell? DrillWell { get; set; }
        public List<DrillWellComment>? DrillWellComment { get; set; }
    }
}
