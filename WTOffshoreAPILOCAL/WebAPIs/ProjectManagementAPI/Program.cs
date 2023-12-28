using Microsoft.AspNetCore.Diagnostics;
using Newtonsoft.Json;
using ProjectManagementAPI;
using System.Net;
using WTOffshoreCore.DTOs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.RegisterIdentityAndDbContext();
builder.RegisterSettings();
builder.RegisterServicesAndRepositories();
builder.RegisterSwagger();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true)
    .AllowCredentials());

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseExceptionHandler(
    options =>
    {
        options.Run(async context =>
        {
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            context.Response.ContentType = "application/json";
            var exceptionObject = context.Features.Get<IExceptionHandlerFeature>();
            if (null != exceptionObject)
            {
                var dto = ResponseDto.Fail(exceptionObject.Error.Message);
                await context.Response.WriteAsync(JsonConvert.SerializeObject(dto)).ConfigureAwait(false);
            }
        });
    });

app.MapControllers();

app.Run();

