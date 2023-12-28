using Microsoft.AspNetCore.Mvc;
using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using RaoAppFramework.Modules.VisaInstant.Repositories;
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
    public class ProjectListController : ControllerTableBase<ProjectList>
    {
        private readonly IProjectListCommentRepository _projectListCommentRepository;

        /// <summary>
        /// 
        /// </summary>
        public ProjectListController(IProjectListRepository repos, 
            IProjectListCommentRepository projectListCommentRepository)
            : base(repos)
        {
            _projectListCommentRepository = projectListCommentRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Insert")]
        public override IActionResult Insert([FromBody] ProjectList obj)
        {
            Repos.Insert(obj);
            Repos.UOW.Commit();

            if (obj.ProjectListComments != null)
            {
                foreach (var projectListComment in obj.ProjectListComments)
                {
                    projectListComment.Id = 0;
                    projectListComment.ProjectListId = obj.Id;
                    _projectListCommentRepository.Insert(projectListComment);
                }
                Repos.UOW.Commit();
            }

            return Ok(ResponseDto.Succeed(obj));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAll")]
        public override IActionResult GetAll()
        {
            var result = Repos.ExecSql<ProjectListExt>("uspProjectList_GetAll", null);
            return Ok(ResponseDto.Succeed(result));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Get")]
        public override IActionResult Get([FromQuery] int id)
        {
            var obj = Repos.Get(id);
            obj.ProjectListComments = _projectListCommentRepository.GetFiltered(x => x.ProjectListId == obj.Id).ToList();
            return Ok(ResponseDto.Succeed(obj));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Delete")]
        public override IActionResult Delete([FromBody] int id)
        {
            var obj = Repos.Get(id);
            obj.ProjectListComments = _projectListCommentRepository.GetFiltered(x => x.ProjectListId == obj.Id).ToList();

            Repos.Delete(obj.Id);
            Repos.UOW.Commit();

            if (obj.ProjectListComments != null)
            {
                foreach (var drillWellComment in obj.ProjectListComments)
                {
                    _projectListCommentRepository.Delete(drillWellComment.Id);
                }
                Repos.UOW.Commit();
            }

            return Ok(ResponseDto.Succeed(obj));
        }
    }
}
