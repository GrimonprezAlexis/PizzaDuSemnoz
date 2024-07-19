import React from 'react';
import './alert.css';

const Alert: React.FC = () => {
  return (
    <div className="alertBanner">
      <div className="py-2">
        <span className="block sm:inline ml-2">
          Notre restaurant sera fermé du <strong>lundi 22 au jeudi 25 juillet inclus</strong> et réouvrira le <strong>vendredi 26 juillet à 12h</strong>.
        </span>
      </div>
    </div>
  );
};

export default Alert;
