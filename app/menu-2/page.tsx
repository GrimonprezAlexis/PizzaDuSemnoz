import BreadcrumbSection2 from '@/component/breadcrumb/BreadcrumbSection2'
import Layout2 from '@/component/layout/Layout2'
import MenuSection2 from '@/component/menu/MenuSection2'
import QrCodeMenu from '@/component/menu/QrCodeMenu'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Cafeu Menu Page 2',
    description: 'Developed by Azizur Rahman',
  }
const Menu2 = () => {
  return (
    <div className='home-6 menu-page-2'>
        <Layout2>
            <BreadcrumbSection2 currentPage='Menu' />
            <QrCodeMenu />
            <MenuSection2 style="ad-menu-happy-ours" title='Happy Hours' startIndex={1} endIndex={7}/>
            <MenuSection2 style='ad-offer ad-menu-lunch' title='Lunch' startIndex={7} endIndex={13}/>
            <MenuSection2 style='ad-menu-happy-ours' title='Dinner' startIndex={13} endIndex={19}/>
        </Layout2>
    </div>
  )
}

export default Menu2