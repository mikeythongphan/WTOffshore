namespace WTOffshoreCore.DTOs
{
    public class ResponseDto
    {

        /// <summary>
        /// 
        /// </summary>
        public static object Succeed(object? data = null) => new { Succeeded = true, Data = data };

        /// <summary>
        /// 
        /// </summary>
        /// <param name="error"></param>
        /// <returns></returns>
        public static object Fail(string error) => new { Succeeded = false, Error = error };

    }
}
