using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Julia.Domains
{
    public partial class Postagem
    {
        public int IdPostagem { get; set; }
        [Required]
        public string PublicacaoOpinar { get; set; }
        [Required]
        public int? IdTipoPostagem { get; set; }
        [Required]
        public int? IdUsuario { get; set; }

        public virtual TipoPostagem IdTipoPostagemNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
