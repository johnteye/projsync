using CRMApi.DbContexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var DeveloperConnectionString = builder.Configuration.GetConnectionString("DeveloperDB");
builder.Services.AddDbContext<DeveloperDbContext>(options => options.UseSqlServer(DeveloperConnectionString));

var ProjectConnectionString = builder.Configuration.GetConnectionString("ProjectDB");
builder.Services.AddDbContext<ProjectDbContext>(options => options.UseSqlServer(ProjectConnectionString));  


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) 
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
