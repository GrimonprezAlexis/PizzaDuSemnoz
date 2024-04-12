import Link from 'next/link'
import React from 'react'
type Props = {
    currentPage: string;
}
const BreadcrumbSection2 = ({currentPage} : Props) => {
  return (
    <section>
        <div className="ad-menu-banner position-relative">
            <div className="ad-menu-banner-overlay">
                <div>
                    <Link href="/">Accueil /</Link>
                    <Link className="selected-page" href="#"> {currentPage}</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BreadcrumbSection2