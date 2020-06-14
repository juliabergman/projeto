import React, { Component } from 'react';
import './testimony.css';
import Julia from '../../assets/images/quemsomos/juliagostosa.jpg'
import Ana from '../../assets/images/quemsomos/anagostosa.jpeg'
import Lucas from '../../assets/images/quemsomos/lucasgostoso.jpeg'
import Filipe from '../../assets/images/quemsomos/filipegostoso.jpeg'
import Matheus from '../../assets/images/quemsomos/matheusgostoso.jpeg'
import LucasLolo from '../../assets/images/quemsomos/lologostoso.jpeg'
import Instagram from '../../assets/images/quemsomos/instagram.svg'
import Twitter from '../../assets/images/quemsomos/twitter.svg'
import Youtube from '../../assets/images/quemsomos/youtube.svg'
import Github from '../../assets/images/quemsomos/github.svg'
import Diogo from '../../assets/images/quemsomos/diogogostoso.jpeg'


export default class Testimony extends Component {
  render() {
    return (
      <div>
        <div className="tstm">
          <div className="tst-info">
            <img src={Julia} alt="Imagem do colaborador" />
            <h3>Julia Bergman</h3>
            <p> P.o, desenvolvedora e designer</p>
          </div>

          <div className="text-box">
            <p>"Atualmente sou a "maluca dos projetos", e as vezes não tenho muito tempo pra presentear as pessoas que amo, mas claro que não deixaria passar a data em branco. Tive essa ideia duas semanas antes da data, então eu diria que foi quase um projeto suicida, porém, já passei do tempo de morar na zona de conforto. E claramente eu não seria nada sem a minha equipe (ou startap, talvez) que topou essa loucura comigo. Não sou nada sem vocês!"</p>
          </div>

          <div className="redessociais">

         <a href="https://www.instagram.com/oincrivelmundodejulia/?hl=pt"> <img src={Instagram} alt="Instagram" /></a>
         <a href="https://twitter.com/Biribrinha">  <img src={Twitter} alt="Twitter" /> </a>
         <a href="https://www.youtube.com/channel/UC4K0pmz5DcBwz73S6P3ZzfA">  <img src={Youtube} alt="Youtube" /> </a>
         <a href="https://github.com/juliabergman">  <img src={Github} alt="Github" /></a>
         

         


          </div>


          

        </div>

        <div className="tstm">
          <div className="tst-info">
            <img src={Ana} alt="Imagem do colaborador" />
            <h3>Ana Carolina Carvalho
</h3>
            <p>Mentora e desenvolvedora</p>
          </div>

          <div className="text-box">
            <p>"Fico muito contente de ter participado de algo tão legal, principalmente porque agora tenho conteúdo o suficiente para expor a dona do projeto. Brincadeiras a parte, fico muito feliz de ter contribuído de alguma forma."</p>
          </div>

          <div className="redessociais">
          <a href="https://www.instagram.com/_ttheana/?hl=pt"> <img src={Instagram} alt="Instagram" /></a>
         <a href="https://github.com/de-carvalho">  <img src={Github} alt="Github" /></a>
        


          </div>

          
        </div>


        <div className="tstm">
          <div className="tst-info">
            <img src={Lucas} alt="Imagem do colaborador" />
            <h3>Lucas Gregorio
</h3>
            <p>Mentor e desenvolvedor</p>
          </div>

          <div className="text-box">
            <p>"testemunho lindo aqui e a pessoa ainda n me mandou"</p>
          </div>

          <div className="redessociais">
        <a href="https://www.instagram.com/oieusouolucass/?hl=pt"> <img src={Instagram} alt="Instagram" /></a>
         <a href="https://github.com/eichild">  <img src={Github} alt="Github" /></a>
         <a href="https://twitter.com/eichild">  <img src={Twitter} alt="Twitter" /> </a>
       
          </div>

          
        </div>



        <div className="tstm">
          <div className="tst-info">
            <img src={Filipe} alt="Imagem do colaborador" />
            <h3>Filipe Giovanni de Luca</h3>
            <p>Editor de fotos</p>
          </div>

          <div className="text-box">
            <p>"Primeiramente, estou muito feliz de ter participado desse projeto totalmente insano, espero que aproveite essa jornada maluco pelo seu Orkut pessoal!! Fotos russas bizonhas escolhidas a dedo por mim ;)"</p>
          </div>

          <div className="redessociais">
          <a href="https://www.instagram.com/giovannideluca7/"> <img src={Instagram} alt="Instagram" /></a>
         <a href="https://twitter.com/filipe_giovanni">  <img src={Twitter} alt="Twitter" /> </a>
         <a href="https://m.youtube.com/channel/UC7g68yyo4DEMyFjKZHHyuHA">  <img src={Youtube} alt="Youtube" /> </a>
         <a href="https://github.com/GiovanniDeLuca7">  <img src={Github} alt="Github" /></a>

          </div>

          
        </div>

        <div className="tstm">
          <div className="tst-info">
            <img src={LucasLolo} alt="Imagem do colaborador" />
            <h3>Lucas Lorenzetti</h3>
            <p>Editor de fotos</p>
          </div>

          <div className="text-box">
            <p>"Venho através dessa nota comunicar que fiquei feliz em participar desse incrível projeto e ter piorado a 
              qualidade de fotos à favor do<br/> A E S T H E T I C S foi uma honra. Feliz dia do bolo!"</p>
          </div>

          <div className="redessociais">
          <a href="https://www.instagram.com/vazio_orbital/"> <img src={Instagram} alt="Instagram" /></a>
         <a href="https://twitter.com/Sir_Excelsior">  <img src={Twitter} alt="Twitter" /> </a>
         <a href="https://github.com/Xenomorph00">  <img src={Github} alt="Github" /></a>


          </div>

          
        </div>

        <div className="tstm">
          <div className="tst-info">
            <img src={Matheus} alt="Imagem do colaborador" />
            <h3>Matheus Souza Silva</h3>
            <p>desenvolvedor</p>
          </div>

          <div className="text-box">
            <p>"Em primeiro lugar, feliz aniversário! Espero que você ame este adorável site que a incrível Julia desenvolveu pra ti. Ajudei em algumas partes do design e código, não nos conhecemos, mas foi de coração. Parabéns!"</p>
          </div>

          <div className="redessociais">
          <a href="https://www.instagram.com/boyymatthew/?hl=pt"> <img src={Instagram} alt="Instagram" /></a>
          <a href="https://twitter.com/MattSouuza">  <img src={Twitter} alt="Twitter" /> </a>
         <a href="https://github.com/MattSouuza">  <img src={Github} alt="Github" /></a>

          </div>

          
        </div>


        <div className="tstm">
          <div className="tst-info">
            <img src={Diogo} alt="Imagem do colaborador" />
            <h3>Diogo Botton</h3>
            <p>desenvolvedor</p>
          </div>

          <div className="text-box">
            <p>"testemunho lindo aqui e a pessoa ainda n me mandou"</p>
          </div>

          <div className="redessociais">
          <a href="https://www.instagram.com/diogo.botton/"> <img src={Instagram} alt="Instagram" /></a>
         <a href="https://github.com/DiogoBotton">  <img src={Github} alt="Github" /></a>

          </div>

          
        </div>



      </div>
    );
  }
}