import React from 'react';
import './alert.css';

const Alert: React.FC = () => {
  return (
    <div className="alertBanner">
      <div className="py-2">
        <strong className="font-bold">Attention !</strong>
        <span className="block sm:inline ml-2">
          Le restaurant sera fermé le <strong>lundi 22, mardi 23, mercredi 24, jeudi 25</strong> et réouvrira le <strong>26 à 12h</strong>.
        </span>
      </div>
    </div>
  );
};

export default Alert;
