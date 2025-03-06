using CRMApi.Domain.Models;
using static CRMApi.Domain.Models.Project;

namespace CRMApi.Domain.DTOs
{
    public class ProjectDTO
    {
        public string? Name { get; set; }
        public string? ClientName { get; set; }
        public DateOnly DateAssigned { get; set; } = DateOnly.FromDateTime(DateTime.Now);
        public List<Developer>? DevelopersAssigned { get; set; }
        public ProjectStatus? Status { get; set; } = ProjectStatus.Pending;
    }
}
