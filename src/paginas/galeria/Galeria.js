import React from "react";
import Slider from "react-slick";

import "./galeria.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Taylor from "../../assets/images/taylor.jpg";
import Dan from "../../assets/images/dan.jpg";
import Troye from "../../assets/images/troye.jpg";
import Harry from "../../assets/images/harry.jpeg";
import Louis from "../../assets/images/louis.jpg";

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
                  <img src={Taylor} alt="Taylor Swift" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Taylor} alt="Taylor" />
                      <p>Taylor Swift</p>
                    </div>

                    <div className="coment-box">
                      <p>Estou linda nessa foto</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Dan} alt="Dan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Dan} alt="Dan" />
                      <p>Dan Reynolds</p>
                    </div>

                    <div className="coment-box">
                      <p>Sou gostoso</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Troye} alt="Troye Sivan" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Troye} alt="Troye" />
                      <p>Troye Sivan</p>
                    </div>

                    <div className="coment-box">
                      <p>Estou lindo nessa foto</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Louis} alt="Louis Tomlinson" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Louis} alt="Louis" />
                      <p>Louis Tomlinson</p>
                    </div>

                    <div className="coment-box">
                      <p>Sou maravilhoso</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="car">
                <div className="vai">
                  <img src={Harry} alt="Harry Styles" />

                  <div className="coments">
                    <div className="coments-profile">
                      <img src={Harry} alt="Harry" />
                      <p>Harry Styles</p>
                    </div>

                    <div className="coment-box">
                      <p>Sou cantor!</p>
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
