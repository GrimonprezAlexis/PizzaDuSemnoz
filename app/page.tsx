import Header2 from '@/component/header/Header2';
import HomeMain5 from '@/component/main/HomeMain5';
import SearchModal from '@/component/modal/SearchModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pizza Du Semnoz',
  description: 'Développé par Seven Consulting',
};

export default function Home() {
  return (
    <div className="wrapper">
      <Header2 theme="theme-3" logo="img/logo/logo-3.png" />
      <HomeMain5 />
      <SearchModal style="yellow-theme" />
    </div>
  );
}
