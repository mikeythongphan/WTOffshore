using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WTOffshoreCore.DataObjects;
using WTOffshoreCore.DbContexts;
using WTOffshoreCore.Repositories;

namespace WTOffshoreCore.Providers
{
    public static class AppSettingProvider
    {

        public static List<AppSetting> AppSettings { get; set; }

        public static string? PushPrivateKey
        {
            get
            {
                var setting = AppSettings.FirstOrDefault(x => x.Category == "Push" && x.Name == "PrivateKey");
                if (setting?.Value == null) return string.Empty;
                var val = setting.Value.Replace("\\n", "\n");
                return val;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        static AppSettingProvider()
        {
            AppSettings = new List<AppSetting>();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="configuration"></param>
        public static void Bootstrap(ConfigurationManager configuration)
        {
            var connStr = configuration.GetConnectionString("ConnectionString");
            Bootstrap(connStr);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="connStr"></param>
        public static void Bootstrap(string connStr)
        {
            var options = new DbContextOptionsBuilder().UseSqlServer(connStr).Options;
            var ctx = new DbContextBase(options);
            var appSettingRepos = new AppSettingRepository(ctx);
            AppSettings = appSettingRepos.GetAll().ToList();
        }

    }
}
