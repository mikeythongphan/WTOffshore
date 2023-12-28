using Microsoft.AspNetCore.Mvc;
using ProjectManagementFramework.Abstract.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WTOffshoreCore.Controllers;
using WTOffshoreCore.DTOs;

namespace ProjectManagementFramework.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormDataController : MvcControllerBase
    {

        private readonly IDropdownItemRepository _dropdownItemRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dropdownItemRepository"></param>
        public FormDataController(IDropdownItemRepository dropdownItemRepository)
        {
            _dropdownItemRepository = dropdownItemRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetInitialData")]
        public IActionResult GetInitialData()
        {
            var dropDownItems = _dropdownItemRepository.GetAll().Where(x => x.IsCurrent);
            return Ok(ResponseDto.Succeed(new
            {
                dropDownItems
            }));
        }

    }
}
