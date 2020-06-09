import React, { Component } from 'react';
import './testimony.css';
import Julia from '../../assets/images/quemsomos/juliagostosa.jpg'
import Ana from '../../assets/images/quemsomos/anagostosa.jpeg'
import Lucas from '../../assets/images/quemsomos/lucasgostoso.jpeg'
import Filipe from '../../assets/images/quemsomos/filipegostoso.jpeg'
import Matheus from '../../assets/images/quemsomos/matheusgostoso.jpeg'
import LucasLolo from '../../assets/images/quemsomos/lologostoso.jpeg'
// import Instagram from '../../assets/images/quemsomos/instagram.png'
// import Twitter from '../../assets/images/quemsomos/twitter.png'
// import Youtube from '../../assets/images/quemsomos/youtube.png'
// import Github from '../../assets/images/quemsomos/github.png'
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
            <p>Julia Bergman teve A brilhante (ou catastrófica) ideia
            de dar de presente para sua amiga Ana Ono uma versão
            futuristica do Orkut. O site foi inspirado em outras
            plataformas como o twitter e facebook.E é claro que,
            sem as outras pessoas que a ajudaram esse projeto não
            seria absolutamente nada</p>
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
            <p>Julia Bergman teve A brilhante (ou catastrófica) ideia
            de dar de presente para sua amiga Ana Ono uma versão
            futuristica do Orkut. O site foi inspirado em outras
            plataformas como o twitter e facebook.E é claro que,
            sem as outras pessoas que a ajudaram esse projeto não
            seria absolutamente nada</p>
          </div>
          
        </div>



        <div className="tstm">
          <div className="tst-info">
            <img src={Filipe} alt="Imagem do colaborador" />
            <h3>Filipe Giovanni de Luca</h3>
            <p>Editor de fotos</p>
          </div>

          <div className="text-box">
            <p>Julia Bergman teve A brilhante (ou catastrófica) ideia
            de dar de presente para sua amiga Ana Ono uma versão
            futuristica do Orkut. O site foi inspirado em outras
            plataformas como o twitter e facebook.E é claro que,
            sem as outras pessoas que a ajudaram esse projeto não
            seria absolutamente nada</p>
          </div>
          
        </div>

        <div className="tstm">
          <div className="tst-info">
            <img src={LucasLolo} alt="Imagem do colaborador" />
            <h3>Lucas Lorenzetti</h3>
            <p>Editor de fotos</p>
          </div>

          <div className="text-box">
            <p>Julia Bergman teve A brilhante (ou catastrófica) ideia
            de dar de presente para sua amiga Ana Ono uma versão
            futuristica do Orkut. O site foi inspirado em outras
            plataformas como o twitter e facebook.E é claro que,
            sem as outras pessoas que a ajudaram esse projeto não
            seria absolutamente nada</p>
          </div>
          
        </div>

        <div className="tstm">
          <div className="tst-info">
            <img src={Matheus} alt="Imagem do colaborador" />
            <h3>Matheus Souza Silva</h3>
            <p>desenvolvedor</p>
          </div>

          <div className="text-box">
            <p>Julia Bergman teve A brilhante (ou catastrófica) ideia
            de dar de presente para sua amiga Ana Ono uma versão
            futuristica do Orkut. O site foi inspirado em outras
            plataformas como o twitter e facebook.E é claro que,
            sem as outras pessoas que a ajudaram esse projeto não
            seria absolutamente nada</p>
          </div>
          
        </div>



      </div>
    );
  }
}