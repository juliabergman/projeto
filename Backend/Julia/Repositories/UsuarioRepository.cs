using Julia.Domains;
using Julia.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Julia.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        ProjetoRSContext ctx = new ProjetoRSContext();

        public List<Usuario> Listar()
        {
            return ctx.Usuario.ToList();
        }

        public Usuario ListarPorId(int id)
        {
            return ctx.Usuario.FirstOrDefault(x => x.IdUsuario == id);
        }

        public Usuario Login(Usuario usuario)
        {
            return ctx.Usuario.FirstOrDefault(x => x.Email == usuario.Email && x.Senha == usuario.Senha);
        }
    }
}
