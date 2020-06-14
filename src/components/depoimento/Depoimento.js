import React, { Component } from 'react';

import './depoimento.css';

import User from '../../assets/images/userfoto.png.png'

export default class depoimento extends Component {
  render() {
    return (
      <div>

        {/* <div className="depoimentotstm">
          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>{this.props.name}</h3>
            <p>visitante</p>
          </div>

          <div className="text-box3">
            <p>{this.props.name}</p>
          </div>
        </div> */}

        <div className="depoimentotstm">
          <div>

          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>Mc juju</h3>
            <p>Criadora dessa....rede?</p>
          </div>

          <div className="text-box3ju">
            <p>ola anagatinha123 rsrsrsr espero que goste desse espacinho... 
              Aqui é o meu real depoimento decente sobre tu.
               Te conheci na etec e fico feliz pqor até hoje a gente manter esse contato, 
               mesmo que cada uma com o seu "corre" e com distanciamento social e tudo mais, 
               apesar desses momentos difíceis, sei que não importa o tempo, as coisas continuam 
               as mesmas. Eu sempre irei desejar tudo do bom e do melhor pra tu e irei vibrar 
               com as suas conquistas, sempre vi um futuro brilhante pra tu e tenho certeza 
               que terá! Como eu ando bem, mas bem ocupada com os estudos, eu não pude te fazer
                um desenho. Então fiz isso aqui... se ainda tá meio confuso sobre oq isso é,
                 com o passar das páginas tenho ctz que tudo vai ficar claro (ps: o site é todo visual mesmo, a única coisa que funciona de vdd é a 
                 autenticação do login, mas vou continuar com esse projeto e no futuro ele vai estar completamente funcional). Te amo muito, tudo feito com muito carinho
                 (e talvez sofrimento srrsrsrsrs)</p>
          </div>

          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>Anonymous</h3>
            <p>Visitante</p>
          </div>

          <div className="text-box3">
            <p>vc lembrah de mim anah vc tinha invejah de mim sua recalkadah</p>
          </div>

          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>Gatinha123</h3>
            <p>Visitante</p>
          </div>

          <div className="text-box3">
            <p>sou sua fa *----* te amo mt sou do bonde do #bj #pro #recalk tbmmm rsrsrsrs</p>
          </div>
          
          </div>

          

        </div>

        
        
      </div>
    );
  }
}