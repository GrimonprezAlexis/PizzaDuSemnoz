import AboutSection from '@/component/about/AboutSection';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import CustomerSection from '@/component/customer/CustomerSection';
import DescribeSection from '@/component/describe/DescribeSection';
import FeatureSection from '@/component/feature/FeatureSection';
import Layout from '@/component/layout/Layout';
import ScheduleSection from '@/component/schedule/ScheduleSection';
import TeamSection from '@/component/team/TeamSection';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Cafeu About Page',
  description: 'Developed by Azizur Rahman',
};
export default function About() {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection title={'A propos'} header={'A propos'} />
        <AboutSection />
        <ScheduleSection />
        <FeatureSection />
      </Layout>
    </div>
  );
}
