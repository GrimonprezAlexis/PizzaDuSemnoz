import React from 'react';
import BlogSlider from '../blog/BlogSlider';

const InfoSection = () => {
  return (
    <div className="cb-item-info-area home5-info dark-mode pt-5 pb-65">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-1 order-lg-0" data-aos="fade-up" data-aos-duration="1000">
            <div className="cb-item-info-content mb-40">
              <h2 className="title mb-20">Carte des Pizzas</h2>
              <p>Nos différentes pizzas sont déclinées selon plusieurs bases :</p>
              <ul className="info note-ul">
                <li className="note-li">
                  <span>Pizzas classiques</span>
                </li>
                <li className="note-li">
                  <span>Pizzas incontournables</span>
                </li>
                <li className="note-li">
                  <span>Les Pizzas Spéciales</span>
                </li>
                <li className="note-li">
                  <span>Les Pizzas pimentées</span>
                </li>
                <li className="note-li">
                  <span>Les Pizzas des Mers</span>
                </li>
                <li className="note-li">
                  <span>Les Pizzas sucrées</span>
                </li>
              </ul>

              <p>
                Et bien entendu, nous vous proposons aussi des plats préparés fait maison, tels que Tartiflette, Tartichèvre et Tartibleu. Vous pourrez vous régaler en accompagnant
                tous cela avec des boissons (sodas, vin, etc.) et des glaces.
              </p>

              <a href="/menu" className="cb-slider-button second-button mt-20 kf-pulse-yellow">
                Voir Prix des Pizzas
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-0 order-lg-1" data-aos="fade-up" data-aos-duration="1500">
            <BlogSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
