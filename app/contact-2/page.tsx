import BreadcrumbSection2 from '@/component/breadcrumb/BreadcrumbSection2'
import OfficeSection from '@/component/contact/OfficeSection'
import ContactForm2 from '@/component/form/ContactForm2'
import Layout2 from '@/component/layout/Layout2'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Cafeu Contact Page 2',
    description: 'Developed by Azizur Rahman',
  }
const Contact2 = () => {
  return (
    <div className='home-6 contact-page-2'>
        <Layout2>
            <BreadcrumbSection2 currentPage='Contact' />
            <OfficeSection />
            <ContactForm2 />
        </Layout2>
    </div>
  )
}

export default Contact2