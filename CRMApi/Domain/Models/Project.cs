namespace CRMApi.Domain.Models
{
    public enum ProjectStatus
    {
        Pending,
        Started,
        Completed,
        Cancelled
    }

    public class Project
    {
 
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? ClientName { get; set; }
        public  DateOnly DateAssigned { get; set; } = DateOnly.FromDateTime(DateTime.Now);
        public List<Developer>? DevelopersAssigned {get; set;}
        public ProjectStatus? Status { get; set; } = ProjectStatus.Pending;

        //Dates for tracking project status 
        public DateOnly DateStarted { get; set; }
        public DateOnly DateCompleted { get; set; }
        public DateOnly DateCanceled { get; set; }

    } 
}
      