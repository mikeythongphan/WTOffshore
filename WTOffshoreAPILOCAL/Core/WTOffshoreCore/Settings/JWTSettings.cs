namespace WTOffshoreCore.Settings
{
    public class JWTSettings
    {
        public required string ValidAudience { get; set; }
        public required string ValidIssuer { get; set; }
        public required string Secret { get; set; }
    }
}
