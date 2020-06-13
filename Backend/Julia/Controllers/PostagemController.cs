using System.Collections.Generic;
using System.Threading.Tasks;
using Julia.Domains;
using Julia.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class PostagemController : ControllerBase
    {
        PostagemRepository _Postagem = new PostagemRepository();

        [HttpGet]
        public IActionResult Get()
        {
            var postagem = _Postagem.Listar();

            if (postagem == null)
            {
                return NotFound();
            }
            //Retorna OK, junto com todas as postagens
            return StatusCode(200, postagem);
        }

        // GET: api/Postagem/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var postagem = _Postagem.ListarPorId(id);

            if (postagem == null)
            {
                return NotFound();
            }
            //Retorna OK, junto com todas as postagens
            return StatusCode(200, postagem);
        }

        [HttpPost]
        public IActionResult Post(Postagem postagem)
        {
            Postagem postagemCriada = null;
            try
            {
                postagemCriada = _Postagem.Salvar(postagem);
            }
            catch (DbUpdateConcurrencyException)
            {
                // Retorna um BAD REQUEST
                return StatusCode(400);
            }
            return StatusCode(200,postagemCriada);
        }
    }

}