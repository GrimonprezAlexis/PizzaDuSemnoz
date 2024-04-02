import BreadcrumbSection2 from '@/component/breadcrumb/BreadcrumbSection2'
import Layout2 from '@/component/layout/Layout2'
import React from 'react'
import { Metadata } from "next";
import AboutSection5 from '@/component/about/AboutSection5';
import CustomerSection3 from '@/component/customer/CustomerSection3';
import TeamSection3 from '@/component/team/TeamSection3';
import DiscountSection from '@/component/offer/DiscountSection';
import TestimonialSection from '@/component/testimonial/TestimonialSection';
export const metadata: Metadata = {
    title: 'Cafeu About Page 2',
    description: 'Developed by Azizur Rahman',
  }
const About2 = () => {
  return (
    <div className='home-6 about-page-2'>
        <Layout2>
            <BreadcrumbSection2 currentPage='About' />
            <AboutSection5 />
            <CustomerSection3 />
            <TeamSection3 />
            <DiscountSection />
            <TestimonialSection img="/img/aida-images/about-page-review-bg.png"/>
        </Layout2>
    </div>
  )
}

export default About2