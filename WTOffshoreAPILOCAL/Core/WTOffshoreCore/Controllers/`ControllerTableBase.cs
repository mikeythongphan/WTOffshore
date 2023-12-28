using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using WTOffshoreCore.DataObjects;
using WTOffshoreCore.DTOs;
using WTOffshoreCore.Repositories;

namespace WTOffshoreCore.Controllers
{

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="TPK"></typeparam>
    public abstract class ControllerTableBase<T> : MvcControllerBase
        where T : DataObjectBase
    {
        protected readonly IRepositoryBase<T> Repos;
        protected string? CurrentUserId => User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="repos"></param>
        protected ControllerTableBase(IRepositoryBase<T> repos)
        {
            Repos = repos;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Insert")]
        public virtual IActionResult Insert([FromBody] T obj)
        {
            Repos.Insert(obj);
            Repos.UOW.Commit();
            return Ok(ResponseDto.Succeed(obj));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Update")]
        public virtual IActionResult Update([FromBody] T obj)
        {
            Repos.Update(obj);
            Repos.UOW.Commit();
            return Ok(ResponseDto.Succeed(obj));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Delete")]
        public virtual IActionResult Delete([FromBody] int id)
        {
            Repos.Delete(id);
            Repos.UOW.Commit();
            return Ok(ResponseDto.Succeed(id));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Get")]
        public virtual IActionResult Get([FromQuery] int id)
        {
            var obj = Repos.Get(id);
            return Ok(ResponseDto.Succeed(obj));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAll")]
        public virtual IActionResult GetAll()
        {
            var result = Repos.GetAll();
            return Ok(ResponseDto.Succeed(result));
        }

    }
}
