import React from 'react';
import './alert.css';
import Link from 'next/link';

const Alert: React.FC = () => {
  return (
    <div className="alertBanner">
      <div className="py-2">
        <span className="block sm:inline ml-2">
          Découvrez notre nouveauté :{' '}
          <strong>
            <Link href="/menu" className="kf-pulse-red">
              La Yaute et Tartidiots
            </Link>
          </strong>{' '}
          débarquent au menu 🍕🎉!" .
        </span>
      </div>
    </div>
  );
};

export default Alert;
