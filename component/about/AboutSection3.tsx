import Link from 'next/link';
import React from 'react';
interface AboutProp {
  style: string;
}
const AboutSection3: React.FC<AboutProp> = ({ style }) => {
  return (
    <section>
      <div className={`about about-3 ${style} cpy-8`}>
        <div className="container">
          <div className="flex-between-align-start">
            <div className="col-md-6 col-xl-4 col-lg-5" data-aos="fade-up" data-aos-duration="1000">
              <div className="avail-inner">
                <div className="available-note">
                  <div className="note-head">
                    <h2 className="sm-title mb-0">Horaire d'ouverture</h2>
                  </div>
                  <ul className="note-ul">
                    <li className="note-li">
                      <p className="day">Distributeur à Pizza</p>
                      <p className="time">24h/24 & 7j/7</p>
                    </li>
                    <li className="note-li">
                      <p className="day">Mardi au Samedi</p>
                      <p className="time">12h à 13h30</p>
                    </li>
                    <li className="note-li">
                      <p className="day">Mardi au Dimanche</p>
                      <p className="time">17h30 à 22h</p>
                    </li>
                    <li className="note-li">
                      <p className="day">Dimanche midi</p>
                      <p className="time">Fermé</p>
                    </li>
                    <li className="note-li">
                      <p className="day">Lundi journée</p>
                      <p className="time">Fermé</p>
                    </li>
                  </ul>

                  <div className="note-footer">
                    <h4 className="note-footer-text">Commandez maintenant</h4>
                    <a className="note-footer-text" href="tel:+0664541850">
                      06 64 54 18 50
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up" data-aos-duration="1500">
              <div className="about-content">
                <p className="sec-sm-title">A propos</p>
                <h2 className="title mb-0">We With The Aspects Food Professional Services</h2>

                <p className="des mb-0">
                  Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software to
                  development, product design, sed apor lored incididcom modo nunc vel purusesfher commodo nunc vel purus
                </p>
                <div className="about-role">
                  <ul className="about-ul">
                    <li>
                      <div className="serv-list">
                        <img src="img/icon/3-7.png" alt="Image not found" />
                        <div className="list-des">
                          <h4 className="list-title">Rating Star</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="serv-list">
                        <img src="img/icon/3-8.png" alt="Image not found" />
                        <div className="list-des">
                          <h4 className="list-title">Free species</h4>
                          <p>Lorem ipsum dolor sit amet, cosectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="custom-btn">
                  About More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
