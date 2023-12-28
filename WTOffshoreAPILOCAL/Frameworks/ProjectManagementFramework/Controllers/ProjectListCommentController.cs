using Microsoft.AspNetCore.Mvc;
using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Controllers;

namespace ProjectManagementFramework.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class ProjectListCommentController : ControllerTableBase<ProjectListComment>
    {

        /// <summary>
        /// 
        /// </summary>
        public ProjectListCommentController(IProjectListCommentRepository repos)
            : base(repos)
        {
        }

    }
}
