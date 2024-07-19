'use client';

import Alert from '@/component/alert/Alert';
import Header2 from '@/component/header/Header2';
import HomeMain5 from '@/component/main/HomeMain5';
import SearchModal from '@/component/modal/SearchModal';
import type { Metadata } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const COOKIE_NAME = 'cookie_accepted';

  // Check if the cookie is present
  useEffect(() => {
    const cookieAccepted = localStorage.getItem(COOKIE_NAME);
    if (cookieAccepted) {
      setShowBanner(false);
    }
  }, []);

  const handleOkClick = () => {
    setShowBanner(false);
    localStorage.setItem(COOKIE_NAME, 'true');
  };

  return (
    <div className="wrapper">
      <Header2 theme="theme-3" logo="img/logo/logo-3.png" />
      <HomeMain5 />
      <SearchModal style="yellow-theme" />{' '}
      {showBanner && (
        <div className="cookie-banner">
          <p>Ce site utilise des cookies. En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.</p>
          <Link href="/mentions-legales" className="customize-link">
            En savoir plus
          </Link>
          <button className="ok-button" onClick={handleOkClick}>
            OK
          </button>
        </div>
      )}
    </div>
  );
}
