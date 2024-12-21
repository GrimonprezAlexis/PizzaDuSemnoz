import React from 'react';
import './alert.css';
import Link from 'next/link';

const Alert: React.FC = () => {
  return (
    <div className="alertBanner">
      <div className="py-2">
        <span className="block sm:inline ml-2">
          📢 Notre restaurant sera fermé du <strong>lundi 23 au 25 Décenbre inclus 🎄</strong>, et le <strong>lundi 30 au 01 Janvier 2025 inclus 🎆</strong>.{' '}
          <span className="kf-pulse-red">Bonnes fêtes et à bientôt chez Pizza du Semnoz ! 🎉</span>
          {/* <strong>
            <Link href="/menu" className="kf-pulse-red">
              La Yaute et Tartidiots
            </Link>
          </strong>{' '} */}
          {/* débarquent au menu 🍕🎉!" . */}
        </span>
      </div>
    </div>
  );
};

export default Alert;
