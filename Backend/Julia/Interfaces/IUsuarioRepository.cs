using Julia.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Julia.Interfaces
{
    interface IUsuarioRepository
    {
        List<Usuario> Listar();
        Usuario ListarPorId(int id);
        Usuario Login(Usuario usuario);
    }
}
