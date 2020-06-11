import React from "react";
import Slider from "react-slick";

import "./galeria.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Foto1 from '../../assets/images/Galeria/2.png';
import Foto2 from '../../assets/images/Galeria/3.png';
import Foto3 from '../../assets/images/Galeria/4.png';
import Foto4 from '../../assets/images/Galeria/5.png';
import Foto5 from '../../assets/images/Galeria/6.png';
import Foto6 from '../../assets/images/Galeria/7.png';
import Foto7 from '../../assets/images/Galeria/8.png';
import Foto8 from '../../assets/images/Galeria/9.png';
import Foto9 from '../../assets/images/Galeria/10.png';
import Foto10 from '../../assets/images/Galeria/11.png';
import Foto11 from '../../assets/images/Galeria/12.png';
import Foto12 from '../../assets/images/Galeria/13.png';
import Foto13 from '../../assets/images/Galeria/14.png';
import Foto14 from '../../assets/images/Galeria/15.png';
import Foto15 from '../../assets/images/Galeria/16.png';
import Foto16 from '../../assets/images/Galeria/17.png';
import Foto17 from '../../assets/images/Galeria/18.png';
import Foto18 from '../../assets/images/Galeria/19.png';
import Foto19 from '../../assets/images/Galeria/20.png';
import Foto20 from '../../assets/images/Galeria/21.png';
import Foto21 from '../../assets/images/Galeria/22.png';
import Foto22 from '../../assets/images/Galeria/23.png';
import Foto23 from '../../assets/images/Galeria/24.png';
import Foto24 from '../../assets/images/Galeria/25.png';
import Foto25 from '../../assets/images/Galeria/26.png';
import Foto26 from '../../assets/images/Galeria/27.png';
import Foto27 from '../../assets/images/Galeria/28.png';
import Foto28 from '../../assets/images/Galeria/29.png';
import Foto29 from '../../assets/images/Galeria/30.png';




function Galeria() {
  const settings = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      <div id="supremo">
        <div className="carousel-teste">
          <div className="carousel-content">
            <h2>Galeria de fotos</h2>
            <Slider {...settings}>



            <div className="car">
                <div className="vai">
                  <img src={Foto1} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Taylor" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>O que deus separa ninguem uneh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto2} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Dan" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>Võh entranha noh ceuh joguinhuh :p</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto3} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Troye" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>Felis anus novoh que as reakalkadahs tirehm o meu nomeh da bocah pois na bocah do povoh euh viru celebridad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto4} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Louis" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>Galinhah modernah que gostah de milhoh enlatador</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto5} alt="Harry Styles" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Harry" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>mi visiteh no meu igluh rsrrs</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="car">
                <div className="vai">
                  <img src={Foto6} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Taylor" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>CARDAPIO DAS INVEJOSA EH LAVAGEM
CARDAPIO DA GOSTOSA EH ESPELHUH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto7} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Dan" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>add láh: ANINHABONEQUINHA94</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto8} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Troye" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>SOUH FAH RAIZ. MINHAH BANDAHALBUM DO ANUH OUVO 100PRE se vc se diz fa me fala ai 6 musicas hum................ </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto9} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Louis" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>Feliz nataluh ate pra vc que eh invejosa e talarisa que so curte minhas foto se tem meu machoh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto10} alt="Harry Styles" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Harry" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>soh pq eu so gostosa nao querh diseee que eu nao so inteligenthy Super hiperfocadah nos estudos. FUTURA PUBLITÁRIA. FACULDADE 2011</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="car">
                <div className="vai">
                  <img src={Foto11} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Taylor" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>Adoro a bandah ragnaroca quem eh poser fassa oh favohr de nao postar suas musicahs #forah como eles dizemh "SUBIH DE PROFISSAO, DE ASSASSINAH VIREI GOSTOSAH"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto12} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Dan" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>As recalcadahs estao morrendo neste momento pois ficoh linda moreninhan e agora sou do bonde das loirahs rsrsrsr bj pro recalc #ROQUE #EM #ROU</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto13} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Troye" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>GENTE TIVE IDEIA DE UM NOVO MOVIMENTO VAMOS CHAMAR VAPORUAVI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto14} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Louis" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>MEU CORASSAUM TAMBEM SOFREH
                      LAGRIMAHS...
                      MEU CORASSAUM TAMBEM SOFREH..
                      DE TANTOH AMOR GUARDADOH,
                      COMESSA A SEH QUEBRAR..
NAS PEDRAS DE SUA ALMAH..
Carlos Drummond de andrade....
VIVEMOS UM DIAH APOS O OUTRO XD....... rsrs 

                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto15} alt="Harry Styles" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Harry" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>#sem.. #filtro #brilho.. #natural RASCUNHOH DAS PODEROSAHS</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="car">
                <div className="vai">
                  <img src={Foto16} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Taylor" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>FILTRU PARECE QUE ESTAMOS NO PLANETA MARTA XD rsrsrrsrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto17} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Dan" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>AMIGOS E ESTHER rsrsrsrrs </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto18} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Troye" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>BONDH DAhS KAXORAh u.u rsrrsrssrrsr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto19} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Louis" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>PRAIA RENDEU BRONZEADUH RS #bjs #pro #recalck (naumm aguentoh mais essa garotah no meu *PERFIL*) </p>
                      #PRAIACOMASAMIGAH
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto20} alt="Harry Styles" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Harry" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>LATIH MAIx ALTOH</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="car">
                <div className="vai">
                  <img src={Foto21} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Taylor" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>SOH ATUROH PQ FAZ AS LISSAUM PRA MIM XD....ESSAH PALHAÇAH, TAH ME HACKEANDOH. (ELAH DAH MAIS CURTIDAHS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto22} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Dan" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>11/12 ELA DISSE SIM ;( </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto23} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Troye" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>TROTE DA FACUL #tintah BONDE APROVADUS #NA UFRJ #bixeteh
                      #FACUL
#ESTHERNUNCAMAIS #meninasolta #gostosasestudiosas #ufrj #bj #pro #recalc  </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto24} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Louis" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>3 ANUHS DE AMIZADEH rsrsrsr #fecha #comigo #ela #e #eu7 #contra #as #recalcadas

                      #FOTOSEMESTHER
#FORARECALQUE

                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto25} alt="Harry Styles" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Harry" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>#indo #trapar rsrs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="car">
                <div className="vai">
                  <img src={Foto26} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Taylor" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>euh beboh saguih rsrsrsrs #bj #pro #recxalck #marlih #mansao</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto27} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Dan" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>EU E PRIMaH rsrs #agostosuravemdefamilia #HEREDITARIOH #rsrsrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto28} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Troye" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>FORMANDUS 2010 (* - *)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Foto29} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Foto26} alt="Louis" />
                      <p>Ana ono</p>
                    </div>

                    <div className="coment-box">
                      <p>#CAPIRA #CHINCOBETO #fotosemesther #evolucao #bj #pro #recalc </p>
                    </div>
                  </div>
                </div>
              </div>

            



            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Galeria;
