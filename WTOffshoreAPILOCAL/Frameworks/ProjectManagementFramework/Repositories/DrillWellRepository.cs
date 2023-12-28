using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Repositories;

namespace RaoAppFramework.Modules.VisaInstant.Repositories
{
    public class DrillWellRepository : RepositoryBase<DrillWell>, IDrillWellRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public DrillWellRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
