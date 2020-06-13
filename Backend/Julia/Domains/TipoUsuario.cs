using System;
using System.Collections.Generic;

namespace Julia.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuario = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }
        public string Tipo { get; set; }

        public virtual ICollection<Usuario> Usuario { get; set; }
    }
}
