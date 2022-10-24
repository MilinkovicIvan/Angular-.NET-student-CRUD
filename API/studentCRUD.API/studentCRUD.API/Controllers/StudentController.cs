using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using studentCRUD.API.Data;
using studentCRUD.API.Models;

namespace studentCRUD.API.Controllers
{
    //declare api controller to get rid of View
    [ApiController]
    //route
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {
        private readonly StudentCRUDDBContext _studentCRUDDBContext;

        public StudentsController(StudentCRUDDBContext studentCRUDDBContext)
        {
            _studentCRUDDBContext = studentCRUDDBContext;
        }


        //methods
        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _studentCRUDDBContext.Students.ToListAsync();

            return Ok(students);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody]Student studentRequest)
        {
            studentRequest.Id = Guid.NewGuid();

            await _studentCRUDDBContext.Students.AddAsync(studentRequest);
            await _studentCRUDDBContext.SaveChangesAsync();

            return Ok(studentRequest);
        }
    }
}
