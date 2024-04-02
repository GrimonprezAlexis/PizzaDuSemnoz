import Link from "next/link";
import React from "react";

const AboutSection5 = () => {
  return (
    <section className="ad-about-section ad-about-page-section">
      <div className="container ad-about-container about-page-container">
        <div className="ad-about-image-container position-relative">
          <div className="ad-about-person-image">
            <img src="/img/aida-images/about-picture1.png" alt="" />
          </div>
          <div className="mt-sm-5 ad-about-side-image-container">
            <img
              className="ad-about-side-tea about-page-cup"
              src="/img/aida-images/about-page-cup.png"
              alt=""
            />
            <img
              className=" ad-about-bottom-image about-page-bottom-image"
              src="/img/aida-images/about-page-image.png"
              alt=""
            />
            <div className="ad-about-rounded-text about-page-rounded-text">
              <img src="/img/aida-images/about-page-rounded-text.png" alt="" />
            </div>
          </div>
        </div>
        <div className="ad-about-text-container">
          <h5>about us</h5>
          <h4 className="ad-title-text">
            Cafeu restoracia online awesome food for you
          </h4>
          <p className="ad-description-text">
            Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
            qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quvoluptas nulla pariatureaqua ipsa quae ab illo
          </p>
          <div className="ad-about-list-container">
            <div className="d-flex gap-3 align-items-center">
              <i className="fa-regular fa-square-check"></i>
              <p>Project Quality Management Plan</p>
            </div>
            <div className="d-flex gap-3 align-items-center mt-2">
              <i className="fa-regular fa-square-check"></i>
              <p>The Ability to Delegate Tasks</p>
            </div>
            <div className="d-flex gap-3 align-items-center mt-2">
              <i className="fa-regular fa-square-check"></i>
              <p>It might be a finished or unfinished</p>
            </div>
            <div className="d-flex gap-3 align-items-center mt-2">
              <i className="fa-regular fa-square-check"></i>
              <p>Project Quality Management Plan</p>
            </div>
          </div>
          <Link href="/about">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection5;
