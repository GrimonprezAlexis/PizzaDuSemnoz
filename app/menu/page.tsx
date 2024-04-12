import Layout from '@/component/layout/Layout';
import MenuPageSection from '@/component/menu/MenuPageSection';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Pizza Du Semnoz Page',
  description: 'Développé par Seven Consulting',
};
export default function Menu() {
  return (
    <div className="wrapper">
      <Layout>
        <MenuPageSection />
      </Layout>
    </div>
  );
}
