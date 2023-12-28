using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Repositories;

namespace RaoAppFramework.Modules.VisaInstant.Repositories
{
    public class DropdownItemRepository : RepositoryBase<DropdownItem>, IDropdownItemRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public DropdownItemRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
