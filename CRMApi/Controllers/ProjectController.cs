using CRMApi.DbContexts;
using CRMApi.Domain.DTOs;
using CRMApi.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace CRMApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController(ProjectDbContext context) : ControllerBase
    {
        private readonly ProjectDbContext _context = context;

        [HttpGet]
        public async Task<IActionResult> GetAllProjects()
        {
            try
            {
                var Projects = await _context.Projects.ToListAsync();
                if (Projects.Count == 0) 
                {
                    return NotFound();
                }

                List<ProjectDTO> AllProjectsDTO = new List<ProjectDTO>();
                foreach (var Project in Projects)
                {
                    AllProjectsDTO.Add(new ProjectDTO
                    {
                        Name = Project.Name,
                        ClientName = Project.ClientName,
                        DateAssigned = Project.DateAssigned,
                        DevelopersAssigned = Project.DevelopersAssigned,
                        Status = Project.Status
                    });
                }

                return Ok(AllProjectsDTO);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error:  {ex}");
            }

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjectById(int id)
        {
            try
            {
                var Project = await _context.Projects.FindAsync(id);
                if (Project is null)
                {
                    return NotFound();
                }

                ProjectDTO projectDTO = new ProjectDTO()
                {
                    Name = Project.Name,
                    ClientName = Project.ClientName,
                    DateAssigned = Project.DateAssigned,
                    DevelopersAssigned = Project.DevelopersAssigned,
                    Status = Project.Status
                };

                return Ok(projectDTO);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error:  {ex}");
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectById(int id)
        {
            try
            {
                var Project = await _context.Projects.FindAsync(id);
                if (Project is null)
                {
                    return NotFound();
                }

                _context.Projects.Remove(Project);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error:  {ex}");
            }
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject(int id, ProjectDTO NewProjectDTO)
        {
            try
            {
                if (NewProjectDTO is null)
                {
                    return BadRequest();
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState); 
                }

                var ExistingProject = await _context.Projects.FindAsync(id);

                if (ExistingProject is null)
                {
                    return NotFound();
                }

                ExistingProject.Name = NewProjectDTO.Name;
                ExistingProject.ClientName = NewProjectDTO.ClientName;
                ExistingProject.DateAssigned = (DateOnly)NewProjectDTO.DateAssigned;
                ExistingProject.DevelopersAssigned = NewProjectDTO.DevelopersAssigned;
                ExistingProject.Status = NewProjectDTO.Status;

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex}");
            }
        }


        [HttpPost]
        public async Task<IActionResult> CreateProject([FromBody] ProjectDTO NewProjectDTO)
        {
            try
            {
                if (NewProjectDTO is null)
                {
                    return BadRequest();
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Project NewProject = new Project()
                {
                    Name = NewProjectDTO.Name,
                    ClientName = NewProjectDTO.ClientName,
                    DateAssigned = (DateOnly)NewProjectDTO.DateAssigned,
                    DevelopersAssigned = NewProjectDTO.DevelopersAssigned,
                    Status = NewProjectDTO.Status       
                };

                await _context.Projects.AddAsync(NewProject);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetProjectById), new {Id = NewProject.Id}, NewProject);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error:  {ex}");
            }

        }
    }
}
