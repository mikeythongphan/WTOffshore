using Microsoft.AspNetCore.Mvc;
using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using ProjectManagementFramework.DTOs;
using System.Security.Cryptography;
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
    public class DrillWellController : ControllerTableBase<DrillWell>
    {

        private readonly IDropdownItemRepository _dropdownItemRepository;
        private readonly IDrillWellCommentRepository _drillWellCommentRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="repos"></param>
        /// <param name="dropdownItemRepository"></param>
        /// <param name="drillWellCommentRepository"></param>
        public DrillWellController(IDrillWellRepository repos,
            IDropdownItemRepository dropdownItemRepository,
            IDrillWellCommentRepository drillWellCommentRepository)
            : base(repos)
        {

            _dropdownItemRepository = dropdownItemRepository;
            _drillWellCommentRepository = drillWellCommentRepository;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Insert")]
        public override IActionResult Insert([FromBody] DrillWell obj)
        {

            Repos.Insert(obj);
            Repos.UOW.Commit();

            if (obj.DrillWellComments != null)
            {
                foreach(var drillWellComment in obj.DrillWellComments)
                {
                    drillWellComment.Id = 0;
                    drillWellComment.DrillWellId = obj.Id;
                    _drillWellCommentRepository.Insert(drillWellComment);
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
            var result = Repos.ExecSql<DrillWellExt>("uspDrillWell_GetAll", null);
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
            obj.DrillWellComments = _drillWellCommentRepository.GetFiltered(x => x.DrillWellId == obj.Id).ToList();
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
            obj.DrillWellComments = _drillWellCommentRepository.GetFiltered(x => x.DrillWellId == obj.Id).ToList();

            Repos.Delete(obj.Id);
            Repos.UOW.Commit();

            if (obj.DrillWellComments != null)
            {
                foreach (var drillWellComment in obj.DrillWellComments)
                {
                    _drillWellCommentRepository.Delete(drillWellComment.Id);
                }
                Repos.UOW.Commit();
            }

            return Ok(ResponseDto.Succeed(obj));
        }
    }
}
