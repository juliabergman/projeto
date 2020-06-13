using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Julia.Domains;
using Julia.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsuarioController : ControllerBase
    {
        UsuarioRepository _repositorio = new UsuarioRepository();

        // GET: api/Usuario
        [HttpGet]
        public IActionResult Get()
        {
            var usuarios = _repositorio.Listar();

            if (usuarios == null)
            {
                return NotFound();
            }

            return StatusCode(200, usuarios);
        }

        //api/Usuario/login
        [HttpPost("login")]
        public IActionResult Login(Usuario usuario)
        {
            var retorno = _repositorio.Login(usuario);

            if (retorno == null)
                return NotFound("piiii piii pii OLHA O RECALQUEEEE vc nao eh a ana e eh so uma recakkadah!");

            var informacoesUsuario = new[]
            {
                new Claim(JwtRegisteredClaimNames.Email, retorno.Email),
                new Claim(JwtRegisteredClaimNames.Jti, retorno.IdUsuario.ToString()), // Jti claimName para ID's
                new Claim(ClaimTypes.Role, retorno.IdTipoUsuario.ToString())
            };

            // Define a chave de acesso ao token
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("orkut-chave-autenticacao"));

            // Define as credenciais do token - Header
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Gera o token
            var token = new JwtSecurityToken(
                issuer: "Julia.Orkut.WebApi",         // emissor do token
                audience: "Julia.Orkut.WebApi",       // destinatário do token
                claims: informacoesUsuario,             // dados definidos acima
                expires: DateTime.Now.AddMinutes(30),   // tempo de expiração
                signingCredentials: creds               // credenciais do token
            );

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
    }
}