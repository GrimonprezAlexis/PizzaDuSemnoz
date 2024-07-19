import React from 'react';
import './alert.css';

const Alert: React.FC = () => {
  return (
    <div className="alertBanner">
      <div className="py-2">
        <strong className="font-bold">Attention !</strong>
        <p className="mt-2">
          Le restaurant sera fermé du <strong>lundi 22 au vendredi 26 juillet</strong> et réouvrira le <strong>vendredi 26 juillet à 12h</strong>.
        </p>
      </div>
    </div>
  );
};

export default Alert;
