using System;
using System.ComponentModel.DataAnnotations;

namespace EF.AspNetCore.CrudUsuario.Shared.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Sobrenome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public DateTime DataNascimento { get; set; }
        [Required]
        public int Perfil { get; set; }
    }
}
