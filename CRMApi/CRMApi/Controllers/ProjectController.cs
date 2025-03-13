using CRMApi.DbContexts;
using CRMApi.Domain.DTOs;
using CRMApi.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.EntityFrameworkCore;

namespace CRMApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController(CRMApiDbContext context) : ControllerBase
    {
        private readonly CRMApiDbContext _context = context;

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
                        Title = Project.Title,
                        Description = Project.Description = Project.Description,
                        ClientName = Project.ClientName,
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
                    Title = Project.Title,
                    ClientName = Project.ClientName,
                    Description = Project.Description = Project.Description,
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

                ExistingProject.Title = NewProjectDTO.Title;
                ExistingProject.ClientName = NewProjectDTO.ClientName;
                ExistingProject.Description = NewProjectDTO.Description;
                ExistingProject.DevelopersAssigned = NewProjectDTO.DevelopersAssigned;
                ExistingProject.Status = (ProjectStatus)NewProjectDTO.Status;

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
                    Title = NewProjectDTO.Title,
                    ClientName = NewProjectDTO.ClientName,
                    Description = NewProjectDTO.Description = NewProjectDTO.Description,
                    DevelopersAssigned = NewProjectDTO.DevelopersAssigned,
                    Status = (ProjectStatus)NewProjectDTO.Status
                };

                await _context.Projects.AddAsync(NewProject);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetProjectById), new { Id = NewProject.Id }, new ProjectDTO {
                    Title = NewProject.Title,
                    ClientName = NewProject.ClientName,
                    Description = NewProject.Description,
                    DevelopersAssigned = NewProject.DevelopersAssigned,
                    Status = (ProjectStatus?)(int)NewProject.Status
                });

            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error:  {ex}");
            }

        }
    }
}
