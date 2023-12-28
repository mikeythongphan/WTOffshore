using Microsoft.AspNetCore.Mvc;
using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Controllers;
using WTOffshoreCore.DTOs;

namespace ProjectManagementFramework.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class DrillWellCommentController : ControllerTableBase<DrillWellComment>
    {

        /// <summary>
        /// 
        /// </summary>
        public DrillWellCommentController(IDrillWellCommentRepository repos)
            : base(repos)
        {
        }

    }
}
