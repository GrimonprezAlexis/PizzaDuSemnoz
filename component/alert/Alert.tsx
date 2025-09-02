import React from 'react';
import './alert.css';
import Link from 'next/link';

const Alert: React.FC = () => {
  return (
    <div className={`alertBanner`}>
      <div className="py-2">
        <span className="block sm:inline ml-2">
          <strong>
            <Link href="/menu" className="kf-pulse-red">
              La Tartidiots et La Yaute
            </Link>
          </strong>{' '}
          débarquent au menu 🍕🎉!" .
        </span>
      </div>
    </div>
  );
};

export default Alert;
