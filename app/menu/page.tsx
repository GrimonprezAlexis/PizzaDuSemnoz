import Layout from "@/component/layout/Layout";
import MenuPageSection from "@/component/menu/MenuPageSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Menu Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Menu(){
    return (
        <div className="wrapper">
            <Layout>
                <MenuPageSection/>
            </Layout>
        </div>
    )
}