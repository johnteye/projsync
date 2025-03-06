using CRMApi.Domain.Models;

namespace CRMApi.Domain.DTOs
{
    public class DeveloperDTO
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
        public List<string>? Stack { get; set; }
        public string? Gender { get; set; }
        public List<Project>? ProjectsAssigned { get; set; }

    }
}
