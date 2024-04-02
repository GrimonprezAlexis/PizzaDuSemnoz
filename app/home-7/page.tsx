import BannerSection5 from '@/component/banner/BannerSection5'
import React from 'react'
import type { Metadata } from 'next'
import AboutSection4 from '@/component/about/AboutSection4'
import VideoSection from '@/component/video/VideoSection'
import ServiceSection2 from '@/component/service/ServiceSection2'
import SpecialOffer from '@/component/offer/SpecialOffer'
import TeamSection3 from '@/component/team/TeamSection3'
import ReservationSection from '@/component/reservation/ReservationSection'
import TestimonialSection from '@/component/testimonial/TestimonialSection'
import BlogSection3 from '@/component/blog/BlogSection3'
import Header3 from '@/component/header/Header3'
import FooterSection2 from '@/component/footer/FooterSection2'
import CartModal from '@/component/modal/CartModal'
import SearchModal from '@/component/modal/SearchModal'
import { ToastContainer } from 'react-toastify'
import SidebarSection from '@/component/sidebar/SidebarSection'
 
export const metadata: Metadata = {
  title: 'Cafeu Home Page 7',
  description: 'Developed by Azizur Rahman',
}
const Home7 = () => {
  return (
    <div className='home-6 dark-theme'>
      <Header3 logo='/img/logo/logo-white.png'/>
      <BannerSection5 />
      <AboutSection4 />
      <VideoSection />
      <ServiceSection2 darkMode={true}/>
      <SpecialOffer />
      <TeamSection3 />
      <ReservationSection />
      <TestimonialSection img="/img/aida-images/review-bg-person.png" />
      <BlogSection3 />
      <FooterSection2 />
      <CartModal />
      <SearchModal style='home-6-search-modal'/>
      <ToastContainer />
      <SidebarSection logo='/img/logo/logo-white.png' />
    </div>
  )
}

export default Home7