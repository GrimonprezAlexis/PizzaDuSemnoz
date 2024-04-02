import BreadcrumbSection2 from '@/component/breadcrumb/BreadcrumbSection2'
import Layout2 from '@/component/layout/Layout2'
import VideoModal from '@/component/modal/VideoModal'
import SubscribeSection2 from '@/component/newsletter/SubscribeSection2'
import ReservationSection2 from '@/component/reservation/ReservationSection2'
import VideoSection2 from '@/component/video/VideoSection2'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Cafeu Reservation Page',
    description: 'Developed by Azizur Rahman',
  }
const Reservation = () => {
  return (
    <div className='home-6 reservation-page-main'>
        <Layout2>
            <BreadcrumbSection2 currentPage='Reservations' />
            <ReservationSection2 />
            <SubscribeSection2 />
            <VideoSection2 />
        </Layout2>
        <VideoModal />
    </div>
  )
}

export default Reservation