using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RaoAppFramework.Modules.VisaInstant.DbContexts;
using WTOffshoreCore.Abstract.Services;
using WTOffshoreCore.Repositories;
using WTOffshoreCore.Settings;

namespace ProjectManagementAPI
{
    public static class StartupExtensions
    {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="builder"></param>
        public static void RegisterSwagger(this WebApplicationBuilder builder)
        {
            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "ProjectManagementAPI", Version = "v1" });
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "Example: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement()
                    {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,

                        },
                        new List<string>()
                    }
                    });
            });

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="builder"></param>
        public static void RegisterServicesAndRepositories(this WebApplicationBuilder builder)
        {

            builder.Services.Scan(x => x.FromApplicationDependencies()
                .AddClasses(x => x.AssignableTo(typeof(IRepositoryBase<>)))
                .AsImplementedInterfaces());

            builder.Services.Scan(x => x.FromApplicationDependencies()
                .AddClasses(x => x.AssignableTo(typeof(IServiceBase)))
                .AsImplementedInterfaces());

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="builder"></param>
        public static void RegisterSettings(this WebApplicationBuilder builder)
        {
            builder.Services.Configure<EnvSettings>(builder.Configuration.GetSection("ENV"));
            builder.Services.Configure<ConnStrSettings>(builder.Configuration.GetSection("ConnectionStrings"));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="builder"></param>
        public static void RegisterIdentityAndDbContext(this WebApplicationBuilder builder)
        {
            var cnnStr = builder.Configuration.GetConnectionString("ConnectionString");
            builder.Services.AddDbContext<IUnitOfWork, ProjectManagementContext>(options => options.UseSqlServer(cnnStr));
        }

    }
}
