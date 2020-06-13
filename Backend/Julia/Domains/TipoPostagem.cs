using System;
using System.Collections.Generic;

namespace Julia.Domains
{
    public partial class TipoPostagem
    {
        public TipoPostagem()
        {
            Postagem = new HashSet<Postagem>();
        }

        public int IdTipoPostagem { get; set; }
        public string TipoPostagem1 { get; set; }

        public virtual ICollection<Postagem> Postagem { get; set; }
    }
}
