import React from 'react';
import './alert.css';

const Alert: React.FC = () => {
  return (
    <div className="alertBanner">
      <div className="py-2">
        <strong className="font-bold">Attention !</strong>
        <span className="block sm:inline ml-2">
          Le restaurant sera fermé du <strong>lundi 22 au vendredi 26 juillet</strong> et réouvrira le <strong>vendredi 26 juillet à 12h</strong>.
        </span>
      </div>
    </div>
  );
};

export default Alert;
