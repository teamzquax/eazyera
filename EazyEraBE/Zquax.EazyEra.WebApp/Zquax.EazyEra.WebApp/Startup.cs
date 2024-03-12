using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using Zquax.EazyEra.Manager.Users;
using Zquax.EazyEra.Models;

namespace YourNamespace
{
    public class Startup
    {
        public Startup(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }

        public IConfiguration _configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<UserManager>();
            // Configure DatabaseManager with connection string from appsettings
            services.Configure<MsSqlConfiguration>(c => _configuration.GetSection(MsSqlConfiguration.SectionName).Bind(c));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
           
          
        }
    }
}
