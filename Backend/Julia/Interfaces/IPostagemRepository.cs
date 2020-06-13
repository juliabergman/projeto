using Julia.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Julia.Interfaces
{
    interface IPostagemRepository
    {
        List<Postagem> Listar();
        Postagem ListarPorId(int id);
        Postagem Salvar(Postagem postagem);
    }
}
