import '@/style/font/icofont.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import 'overlayscrollbars/overlayscrollbars.css';
import '@/style/all.min.css';
import '@/style/main.css';
import '@/style/responsive.css';
import { CafeuProvider } from '@/context/CafeuContext';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Head>
        <meta charSet="UTF-8" />
        <title>Pizza|Seynod|Annecy|Vieugy|Quintal</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pizza du Semnoz sur le parking de Géant Casino à Seynod, vous propose des pizzas élaborées avec des produits de qualité" />
        <meta property="og:url" content="https://pizza-du-semnoz.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PIZZA DU SEMNOZ V2" />
        <meta property="og:title" content="Pizza|Seynod|Annecy|Vieugy|Quintal" />
        <meta property="og:description" content="Pizza du Semnoz sur le parking de Géant Casino à Seynod, vous propose des pizzas élaborées avec des produits de qualité" />
        <meta property="og:image" content="https://pizza-du-semnoz.fr/_media/img/thumb/apple-icon-144x144-2.png" />
        <meta property="og:image:width" content="144" />
        <meta property="og:image:height" content="144" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Pizza|Seynod|Annecy|Vieugy|Quintal" />
        <meta name="twitter:description" content="Pizza du Semnoz sur le parking de Géant Casino à Seynod, vous propose des pizzas élaborées avec des produits de qualité" />
        <meta name="twitter:image" content="https://pizza-du-semnoz.fr/_media/img/thumb/apple-icon-144x144-2.png" />
        <meta name="generator" content="NextJS" />
        <link href="/icon/favicon-32x32.png" rel="shortcut icon" type="image/png" />
        <link href="/icon/apple-icon-144x144-2.png" rel="apple-touch-icon" />
        <meta name="msapplication-TileColor" content="#5835b8" />
        <meta name="msapplication-TileImage" content="/icon/apple-icon-144x144-2.png" />
      </Head>

      <CafeuProvider>
        <body>{children}</body>
      </CafeuProvider>
    </html>
  );
}
