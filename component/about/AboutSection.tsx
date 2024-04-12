'use client';
import Link from 'next/link';
import React from 'react';
import BlogSlider from '../blog/BlogSlider';

const AboutSection = () => {
  return (
    <section>
      <div className="about about-1 cpy-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4 order-0 order-lg-1" data-aos="fade-up" data-aos-duration="1500">
              <BlogSlider />
            </div>

            <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-left" data-aos-duration="1000">
              <div className="h-100 d-flex align-items-center pl-40">
                <div className="about-details">
                  <span className="sm-title">A propos de nous</span>
                  <h2 className="about-title mb-3">Pâte à pizza faite maison</h2>
                  <p className="about-des mb-4">
                    Depuis 2015, chez Pizza du Semnoz nous voulons vous offrir une expérience culinaire authentique, où chaque visite est une promesse de satisfaction gustative.
                    Chaque ingrédient est méticuleusement sélectionné pour garantir la fraîcheur et la saveur dans chaque bouchée. Nous croyons fermement qu’une bonne pizza
                    commence par une pâte de qualité, c’est pourquoi notre pâte est fabriquée maison, chaque jour, avec amour et dévouement.
                    <br></br>
                    <br></br>
                    Et pour couronner le tout, nous utilisons les meilleurs fromages de la région pour enchanter vos papilles.
                  </p>
                  <div className="service-button-wrap mt-40">
                    <Link href="/menu" className="custom-btn">
                      Voir les Pizzas
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
