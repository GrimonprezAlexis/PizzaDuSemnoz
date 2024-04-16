import Link from 'next/link';
import React from 'react';
import ScheduleBlock from '../schedule/ScheduleBlock';
interface AboutProp {
  style: string;
}
const AboutSection3: React.FC<AboutProp> = ({ style }) => {
  return (
    <section>
      <div className={`about about-3 ${style} pt-30 pb-10`}>
        <div className="container">
          <div className="flex-between-align-start">
            <div className="col-md-6 col-xl-4 col-lg-5">
              <ScheduleBlock />
            </div>
            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up" data-aos-duration="1500">
              <div className="about-content">
                <p className="sec-sm-title">A propos</p>
                <h2 className="title mb-0">Pizza de qualité 24h/7j</h2>
                <p className="des mb-0">
                  Pizza du Semnoz a été créé par XX , passionnée de cuisine et savoyard dans l’âme ! Notre Chalet Pizza du Semnoz abrite un distributeur à pizza révolutionnaire,
                  offrant une expérience gastronomique à toute heure du jour ou de la nuit. Nous mettons un point d’honneur à la fraîcheur et à la qualité de nos produits, avec une
                  pâte maison préparée quotidiennement. Rendez-nous visite pour savourer l’essence des Alpes, une part de pizza à la fois.
                </p>

                <div className="about-role">
                  <ul className="about-ul">
                    <li>
                      <div className="serv-list">
                        <img src="img/icon/v2/1.png" alt="Image not found" />
                        <div className="list-des">
                          <h4 className="list-title">Format 50cm</h4>
                          {/* <p>Avis à tous les gourmands, format 50 cm pour toutes les pizzas de notre carte !</p> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="serv-list">
                        <img src="img/icon/v2/2.png" alt="Image not found" />
                        <div className="list-des">
                          <h4 className="list-title">Saveurs Authentiques</h4>
                          {/* <p>Inspirées des délices de la Savoie, pour un goût mémorable.</p> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="cb-slider-button second-button kf-pulse-yellow">
                  En Savoir Plus
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container cpy-5">
          <hr></hr>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
