using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using WTOffshoreCore.DTOs;
using WTOffshoreCore.Settings;

namespace WTOffshoreCore.Controllers
{

    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class AppSettingsController : ControllerBase
    {

        private readonly EnvSettings _envSettings;
        private readonly ConnStrSettings _connStrSettings;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="envSettings"></param>
        /// <param name="connStrSettings"></param>
        public AppSettingsController(IOptions<EnvSettings> envSettings,
            IOptions<ConnStrSettings> connStrSettings)
        {
            _envSettings = envSettings.Value;
            _connStrSettings = connStrSettings.Value;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {

            var appName = _envSettings.AppName;
            var connStr = _connStrSettings.ConnectionString.ToLower();

            var dbServer = Regex.Match(connStr, @"server=([^;])*").Groups[0].Value.Replace("server=", string.Empty);

            var result = new
            {
                AppName = _envSettings.AppName,
                DatabaseEnv = _envSettings.EnvName,
                DatabaseServer = dbServer
            };

            return Ok(ResponseDto.Succeed(result));
        }

    }
}
