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
    public class DropdownItemController : ControllerTableBase<DropdownItem>
    {

        /// <summary>
        /// 
        /// </summary>
        public DropdownItemController(IDropdownItemRepository repos)
            : base(repos)
        {
        }

    }
}
