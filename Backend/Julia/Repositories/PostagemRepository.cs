using Julia.Domains;
using Julia.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Julia.Repositories
{
    public class PostagemRepository : IPostagemRepository
    {
        ProjetoRSContext ctx = new ProjetoRSContext();

        public List<Postagem> Listar()
        {
            return ctx.Postagem.ToList();
        }

        public Postagem ListarPorId(int id)
        {
            return ctx.Postagem.FirstOrDefault(x => x.IdPostagem == id);
        }

        public Postagem Salvar(Postagem postagem)
        {
            var post = ctx.Postagem.Add(postagem).Entity;
            ctx.SaveChanges();
            return post;
        }
    }
}
