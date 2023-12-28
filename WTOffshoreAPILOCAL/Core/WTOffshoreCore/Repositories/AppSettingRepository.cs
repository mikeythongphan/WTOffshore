using WTOffshoreCore.Abstract.Repositories;
using WTOffshoreCore.DataObjects;

namespace WTOffshoreCore.Repositories
{
    public class AppSettingRepository : RepositoryBase<AppSetting>, IAppSettingRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public AppSettingRepository(IUnitOfWork context) : base(context)
        {
        }


    }
}
