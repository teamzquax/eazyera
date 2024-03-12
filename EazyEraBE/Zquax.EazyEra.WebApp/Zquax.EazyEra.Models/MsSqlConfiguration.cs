namespace Zquax.EazyEra.Models
{
    public class MsSqlConfiguration
    {
        private string? _tokenResourceUrl;
        public const string SectionName = "MsSqlSettings";

        public required string ConnectionString { get; set; }

        public string TokenResourceUrl
        {
            get => string.IsNullOrEmpty(_tokenResourceUrl) ? null : _tokenResourceUrl;
            set => _tokenResourceUrl = value;
        }
    }
}
