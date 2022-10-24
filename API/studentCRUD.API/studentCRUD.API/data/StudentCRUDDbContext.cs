using Microsoft.EntityFrameworkCore;
using studentCRUD.API.Models;

namespace studentCRUD.API.Data
{
    public class StudentCRUDDBContext : DbContext
    {
        //options constructor, when passed options it will also pass them to base class
        public StudentCRUDDBContext(DbContextOptions options) : base(options)
        {

        }

        //entity framework will use this DBSet property to create table
        public DbSet<Student> Students { get; set; }
    }
}