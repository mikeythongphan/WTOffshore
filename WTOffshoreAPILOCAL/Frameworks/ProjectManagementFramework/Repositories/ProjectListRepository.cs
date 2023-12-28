using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Repositories;

namespace RaoAppFramework.Modules.VisaInstant.Repositories
{
    public class ProjectListRepository : RepositoryBase<ProjectList>, IProjectListRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public ProjectListRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
