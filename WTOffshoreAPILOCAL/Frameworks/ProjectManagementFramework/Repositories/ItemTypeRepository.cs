using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Repositories;

namespace RaoAppFramework.Modules.VisaInstant.Repositories
{
    public class ItemTypeRepository : RepositoryBase<ItemType>, IItemTypeRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public ItemTypeRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
