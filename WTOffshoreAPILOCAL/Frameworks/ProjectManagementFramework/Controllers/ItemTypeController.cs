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
    public class ItemTypeController : ControllerTableBase<ItemType>
    {

        /// <summary>
        /// 
        /// </summary>
        public ItemTypeController(IItemTypeRepository repos)
            : base(repos)
        {
        }

    }
}
