using ProjectManagementFramework.Abstract.Repositories;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.Repositories;

namespace RaoAppFramework.Modules.VisaInstant.Repositories
{
    public class ProjectListCommentRepository : RepositoryBase<ProjectListComment>, IProjectListCommentRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public ProjectListCommentRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
