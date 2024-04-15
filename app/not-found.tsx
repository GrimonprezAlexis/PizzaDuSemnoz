import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import Layout from '@/component/layout/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrapper">
      <Layout>
        <BreadcrumbSection header="404 Page" title="404" />
        <div className="dynamic-error-page-container">
          <div className="not-found-image-container">
            <img src="/img/404.jpg" alt="page not found" />
          </div>
          <p className="no-page-found-text">La page que vous recherchez n'existe pas.</p>
          <Link href="/" className="custom-btn">
            Retourner à l'accueil
          </Link>
        </div>
      </Layout>
    </div>
  );
}
