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
    public class DeveloperController(CRMApiDbContext context) : ControllerBase
    {
        private readonly CRMApiDbContext _context = context;

        [HttpGet]
        public async Task<IActionResult> GetAllDevelopers()
        {
            try
            {
                var Developers = await _context.Developers.ToListAsync();
                if (Developers is null)
                {
                    return NotFound();
                }

                List<DeveloperDTO> AllDevelopersDTO = new List<DeveloperDTO>();

                foreach (var Developer in Developers)
                {
                    AllDevelopersDTO.Add(
                        new DeveloperDTO
                        {
                            Name = Developer.Name,
                            Email = Developer.Email,
                            Stack = Developer.Stack,
                            ProjectsAssigned = Developer.ProjectsAssigned
                        });
                }

                return Ok(AllDevelopersDTO);

            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDeveloperById(int id)
        {
            try
            {
                var Developer = await _context.Developers.FindAsync(id);
                if (Developer is null)
                {
                    return NotFound();
                }

                DeveloperDTO developerDTO = new DeveloperDTO()
                {
                    Name = Developer.Name,
                    Email = Developer.Email,
                    Stack = Developer.Stack,
                    ProjectsAssigned = Developer.ProjectsAssigned
                };

                return Ok(developerDTO);
            }

            catch (Exception ex) 
            {
                return StatusCode(500, $"Error: {ex}");
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeveloperById(int id)
        {
            try
            {
                var Developer = await _context.Developers.FindAsync(id);
                if (Developer is null)
                {
                    return NotFound();
                }

                _context.Developers.Remove(Developer);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex}");
            }
        }



        [HttpPost]
        public async Task<IActionResult> CreateDeveloper([FromBody] DeveloperDTO NewDeveloperDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Developer NewDeveloper = new Developer()
                {
                    Name = NewDeveloperDTO.Name,
                    Email = NewDeveloperDTO.Email,
                    Stack = NewDeveloperDTO.Stack,
                    ProjectsAssigned = NewDeveloperDTO.ProjectsAssigned
                };

                await _context.Developers.AddAsync(NewDeveloper);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetDeveloperById), new { Id = NewDeveloper.Id }, NewDeveloper);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDeveloper(int id, DeveloperDTO UpdatedDeveloperDTO)
        {
            try
            {
                var Developer = await _context.Developers.FindAsync(id);

                if (Developer is null)
                {
                    return NotFound();
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }


                Developer.Name = UpdatedDeveloperDTO.Name;
                Developer.Email = UpdatedDeveloperDTO.Email;
                Developer.Stack = UpdatedDeveloperDTO.Stack;
                Developer.ProjectsAssigned = UpdatedDeveloperDTO.ProjectsAssigned;


                await _context.SaveChangesAsync();

                return NoContent();
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex}");
            }
        }

    }
}
