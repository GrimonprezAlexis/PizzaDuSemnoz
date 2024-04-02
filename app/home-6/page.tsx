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
import Layout2 from '@/component/layout/Layout2'
 
export const metadata: Metadata = {
  title: 'Cafeu Home Page 6',
  description: 'Developed by Azizur Rahman',
}
const Home6 = () => {
  return (
    <div className='home-6'>
      <Layout2>
        <BannerSection5 />
        <AboutSection4 />
        <VideoSection />
        <ServiceSection2 
        darkMode={false}
        />
        <SpecialOffer />
        <TeamSection3 />
        <ReservationSection />
        <TestimonialSection img="/img/aida-images/review-bg-person.png" />
        <BlogSection3 />
      </Layout2>
    </div>
  )
}

export default Home6