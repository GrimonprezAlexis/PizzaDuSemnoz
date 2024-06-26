import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import WishlistSection from "@/component/wishlist/WishlistSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Wishlist Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Wishlist() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Wishlist" header="Wishlist Page"/>
                <WishlistSection/>
            </Layout>
        </div>
    )
}