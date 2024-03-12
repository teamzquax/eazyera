using Zquax.EazyEra.DatabaseCommon;
using Zquax.EazyEra.Manager;
using Zquax.EazyEra.Manager.Users;
using Zquax.EazyEra.Models;
using Zquax.EazyEra.Repository.Interfaces;
using Zquax.EazyEra.Repository.Managers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
using IHost host = Host.CreateApplicationBuilder(args).Build();
IConfiguration config = host.Services.GetRequiredService<IConfiguration>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<UserManager>();
builder.Services.AddScoped<EventManager>();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IEventDetailsRepository, EventDetailsRepository>();
builder.Services.AddScoped<IDatabaseManager, DatabaseManager>();
builder.Services.Configure<MsSqlConfiguration>(c => config.GetSection(MsSqlConfiguration.SectionName).Bind(c));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(builder => builder
     .AllowAnyOrigin()
     .AllowAnyMethod()
     .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
