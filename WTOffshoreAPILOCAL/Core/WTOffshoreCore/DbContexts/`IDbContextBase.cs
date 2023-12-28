using Microsoft.EntityFrameworkCore;
using WTOffshoreCore.DataObjects;
using WTOffshoreCore.Repositories;

namespace WTOffshoreCore.DbContexts
{
    public interface IDbContextBase : IUnitOfWork
    {
        DbSet<AppSetting> AppSettings { set; get; }
    }
}
