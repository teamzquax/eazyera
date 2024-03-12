public class UserDetails
{
    public long UserId { get; set; }
    public required string FullName { get; set; }
    public required string Email { get; set; }
    public required string PhoneNumber { get; set; }
    public required string AdharNo { get; set; }
    public required string AdharPath { get; set; }
    public string? ProfilePicPath { get; set; }
    public string? CurrentAddress { get; set; }
    public string? CompanyName { get; set; }
    public int? LastModifiedBy { get; set; }
}
