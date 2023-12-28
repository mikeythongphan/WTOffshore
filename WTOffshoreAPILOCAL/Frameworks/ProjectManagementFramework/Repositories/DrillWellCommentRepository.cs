using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Repositories;

namespace RaoAppFramework.Modules.VisaInstant.Repositories
{
    public class DrillWellCommentRepository : RepositoryBase<DrillWellComment>, IDrillWellCommentRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public DrillWellCommentRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
