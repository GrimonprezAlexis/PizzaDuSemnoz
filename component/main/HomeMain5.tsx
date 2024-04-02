'use client';
import { ToastContainer } from 'react-toastify';
import AboutSection3 from '../about/AboutSection3';
import BannerSection4 from '../banner/BannerSection4';
import FooterSection from '../footer/FooterSection';
import InfoSection from '../info/InfoSection';
import PartnerSection from '../partner/PartnerSection';
import SidebarSection from '../sidebar/SidebarSection';
import SocialSection from '../social/SocialSection';

const HomeMain5 = () => {
  return (
    <div className="body-wrapper">
      <BannerSection4 />
      <SocialSection style="social-sec-4" />
      <SidebarSection logo="/img/logo/logo-3.png" />
      <AboutSection3 style="home5-about dark-mode" />
      {/* <OfferCtaSection /> */}
      <InfoSection />
      {/* <MenuBookSection /> */}
      <PartnerSection />
      <FooterSection style="footer-3 dark-mode border-tp" />
      <ToastContainer />
    </div>
  );
};

export default HomeMain5;
