using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Julia.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Postagem = new HashSet<Postagem>();
        }

        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
        public int? IdTipoUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Postagem> Postagem { get; set; }
    }
}
