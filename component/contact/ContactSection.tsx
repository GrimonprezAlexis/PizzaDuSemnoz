import React from 'react';

const ContactSection = () => {
  return (
    <div className="contact cpy-6" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="form-wrapper inner">
          <div className="row">
            <div className="col-xl-8">
              <div className="form-inside">
                <div className="form-head" data-aos="fade-up" data-aos-duration="1000">
                  <div className="section-head text-center">
                    <span className="sm-title ">Contactez-nous</span>
                    <h2 className="sec-title">Veuillez nous contacter</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="contact-form pt-15" data-aos="fade-up" data-aos-duration="1500">
                    <form action="mail.php" method="post" id="contact-message">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group flex-nowrap mb-30">
                            <input type="text" className="form-control" placeholder="Nom *" />
                            <span className="right-input-icon">
                              <i className="icofont-ui-user"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group flex-nowrap mb-30">
                            <input type="email" className="form-control" placeholder="Email *" />
                            <span className="right-input-icon">
                              <i className="icofont-email"></i>
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <textarea name="message" className="form-control" placeholder="Votre message *" rows={5}></textarea>
                        </div>
                      </div>
                      <div className="submit-button-sec mt-30">
                        <button type="submit" className="custom-btn">
                          Envoyer le message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4" data-aos="fade-up" data-aos-duration="1000">
              <div className="contact-offer">
                <iframe
                  width="520"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pizza%20Du%20Semnoz%20-%20Seynod%20Seynod+(Pizza%20Du%20Semnoz%20-%20Seynod)&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <script type="text/javascript" src="https://embedmaps.com/google-maps-authorization/script.js?id=0dfe1895d1a19ab8886bc0120fdf8a9e2440616c"></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
