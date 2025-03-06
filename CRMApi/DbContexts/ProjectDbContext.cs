using CRMApi.Domain.Models;
using Microsoft.EntityFrameworkCore;
namespace CRMApi.DbContexts
{
    public class ProjectDbContext(DbContextOptions<ProjectDbContext> options): DbContext(options)
    {
        public DbSet<Project>? Projects { get; set; }
    }
}
