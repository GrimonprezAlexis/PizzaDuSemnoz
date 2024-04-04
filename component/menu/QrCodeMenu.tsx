import React from 'react';

const QrCodeMenu = () => {
  return (
    <section>
      <div className="ad-menu-qr-code">
        <div className="ad-menu-qr-code-container">
          <p>
            Scannez le QR Code
            <br className="d-none d-lg-block" />
            pour voir le Menu Complet
          </p>
          <img src="/img/aida-images/menu-qr-code.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default QrCodeMenu;
