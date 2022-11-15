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
        //get all students
        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _studentCRUDDBContext.Students.ToListAsync();

            return Ok(students);
        }
        //add student
        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] Student studentRequest)
        {
            studentRequest.Id = Guid.NewGuid();

            await _studentCRUDDBContext.Students.AddAsync(studentRequest);
            await _studentCRUDDBContext.SaveChangesAsync();

            return Ok(studentRequest);
        }
        //get student
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetStudent([FromRoute] Guid id)
        {
            var student = await _studentCRUDDBContext.Students.FirstOrDefaultAsync(x => x.Id == id);
            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }
        //update student
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateStudent([FromRoute] Guid id, Student updateStudentRequest)
        {
            var student = await _studentCRUDDBContext.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            student.Id = updateStudentRequest.Id;
            student.Name = updateStudentRequest.Name;
            student.Email = updateStudentRequest.Email;
            student.Phone = updateStudentRequest.Phone;
            student.Age = updateStudentRequest.Age;
            student.Faculty = updateStudentRequest.Faculty;

            await _studentCRUDDBContext.SaveChangesAsync();
            return Ok(student);
        }
        //deleteStudent
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] Guid id)
        {
            var student = await _studentCRUDDBContext.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            _studentCRUDDBContext.Students.Remove(student);
            await _studentCRUDDBContext.SaveChangesAsync();

            return Ok(student);
        }
    }
}
