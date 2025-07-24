import React from 'react';
import './alert.css';
import Link from 'next/link';

const Alert: React.FC = () => {
  const timeBeforeHideAlert = new Date('2025-08-12').getTime();
  const currentTime = new Date().getTime();
  const shouldHideAlert = currentTime >= timeBeforeHideAlert;

  return (
    <div className={`${shouldHideAlert ? 'hidden' : 'alertBanner'}`}>
      <div className="py-2">
        <span className="block sm:inline ml-2">
          📢 Notre restaurant sera fermé du <strong>lundi 04 août au dimanche 10 août inclus</strong>. <strong>Réouverture le mardi 12 août</strong>.{' '}
          <span className="kf-pulse-red">À bientôt chez Pizza du Semnoz ! 🍕🎉</span>
        </span>
      </div>
    </div>
  );
};

export default Alert;
