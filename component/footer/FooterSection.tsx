import { useCafeuContext } from '@/context/CafeuContext';
import Link from 'next/link';
import React from 'react';
import SubscribeForm from '../form/SubscribeForm';
interface FooterProp {
  style: string;
}
const FooterSection: React.FC<FooterProp> = ({ style }) => {
  const { currentYear } = useCafeuContext();
  return (
    <footer>
      <div className={`footer-section ${style}`} data-background="/img/footer-bg.png">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 my-2 smpadright40" data-aos="fade-up" data-aos-duration="500">
              <div className="footer-content-wrapper">
                <div className="footer-logo mb-4">
                  <h3>🍕 Pizza Du Semnoz</h3>
                </div>
                <p>Retrouvez-nous au Parking GEANT Casino - Face au restaurant McDonalds</p>
                <ul className="address">
                  <li>
                    <span className="icofont-location-pin"></span>
                    <a className="address-info" href="http://maps.google.com/?q=Pizza du Semnoz, 74600 Seynod" target="_blank">
                      Avenue d'Aix les Bains, 74600 Seynod
                    </a>
                  </li>

                  <li>
                    <span className="icofont-email"></span>
                    <div className="address-inner">
                      <p className="address-info">
                        <a href="mailto:contact@pizza-du-semnoz.fr">contact@pizza-du-semnoz.fr</a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <span className="icofont-ui-call"> </span>
                    <div className="address-inner">
                      <p className="address-info">
                        <a href="tel:+123456679123">+33 6 64 54 18 50</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 my-2 padleft40" data-aos="fade-up" data-aos-duration="500">
              <div className="footer-content-wrapper">
                <div className="footer-sec-head mb-4">
                  <h4 className="footer-widget-title">Plan du site</h4>
                </div>
                <ul className="qu-link">
                  <li className="foot-list">
                    <Link href="/" className="footer-link">
                      Accueil
                    </Link>
                  </li>
                  <li className="foot-list">
                    <Link href="/menu" className="footer-link">
                      Nos Pizzas
                    </Link>
                  </li>
                  <li className="foot-list">
                    <Link href="/about" className="footer-link">
                      A Propos
                    </Link>
                  </li>
                  <li className="foot-list">
                    <Link href="/contact" className="footer-link">
                      Contactez-nous
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 my-2 padright40" data-aos="fade-up" data-aos-duration="500">
              <div className="footer-content-wrapper">
                <div className="footer-sec-head mb-4">
                  <h4 className="footer-widget-title">Nos Pizzas</h4>
                </div>
                <ul className="insta-feed">
                  <li className="foot-list">
                    <a href="https://www.instagram.com/" className="footer-link">
                      <img src="/img/v2/footer/1.jpeg" alt="" />
                    </a>
                  </li>
                  <li className="foot-list">
                    <a href="https://www.instagram.com/" className="footer-link">
                      <img src="/img/v2/footer/2.jpeg" alt="" />
                    </a>
                  </li>
                  <li className="foot-list">
                    <a href="https://www.instagram.com/" className="footer-link">
                      <img src="/img/v2/footer/3.jpeg" alt="" />
                    </a>
                  </li>
                  <li className="foot-list">
                    <a href="https://www.instagram.com/" className="footer-link">
                      <img src="/img/v2/footer/4.jpeg" alt="" />
                    </a>
                  </li>
                  <li className="foot-list">
                    <a href="https://www.instagram.com/" className="footer-link">
                      <img src="/img/v2/footer/5.jpeg" alt="" />
                    </a>
                  </li>
                  <li className="foot-list">
                    <a href="https://www.instagram.com/" className="footer-link">
                      <img src="/img/v2/footer/6.jpeg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 my-2" data-aos="fade-up" data-aos-duration="500">
              <div className="footer-content-wrapper">
                <div className="footer-sec-head mb-4">
                  <h4 className="footer-widget-title">Horaire d'ouverture</h4>
                </div>

                <ul className="note-ul">
                  <li className="note-li">
                    <span className="day">Distributeur à Pizza</span>
                    <span className="time">24h/24 & 7j/7</span>
                  </li>
                  <li className="note-li">
                    <span className="day">Mardi au Samedi</span>
                    <span className="time">12h à 13h30</span>
                  </li>
                  <li className="note-li">
                    <span className="day">Mardi au Dimanche</span>
                    <span className="time">17h30 à 22h</span>
                  </li>
                  <li className="note-li">
                    <span className="day">Dimanche midi</span>
                    <span className="time">Fermé</span>
                  </li>
                  <li className="note-li">
                    <span className="day">Lundi journée</span>
                    <span className="time">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="last-footer">
          <div className="container">
            <div className="flex-between-align-start">
              <div>
                <ul className="social-ul">
                  <li className="social-list">
                    <a href="#" className="social-link">
                      <span className="icofont-facebook"></span>
                    </a>
                  </li>

                  <li className="social-list">
                    <a href="#" className="social-link">
                      <span className="icofont-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="copyright-text">© Seven Consulting. {currentYear} All Right Reserved</p>
              </div>
              <div className="text-center">
                <a href="#" className="social-link">
                  <span className="icofont-university"></span> Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
