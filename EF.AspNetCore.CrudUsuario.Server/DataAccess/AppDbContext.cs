using EF.AspNetCore.CrudUsuario.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace EF.AspNetCore.CrudUsuario.Server.DataAccess
{
    public class AppDbContext : DbContext
    {
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { }
    }
}
