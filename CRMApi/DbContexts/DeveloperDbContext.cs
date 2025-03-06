using CRMApi.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace CRMApi.DbContexts
{
    public class DeveloperDbContext(DbContextOptions<DeveloperDbContext> options): DbContext(options)
    {
        public DbSet<Developer>? Developers { get; set; } 
    }
}
