'use client';
import BannerPrincipal from "./components/BannerPrincipal";
import Header from "./components/Header";
import SobreMin from "./components/SobreMim";


export default function Home() {
  return (
    <main>
      <Header/>
      <BannerPrincipal/>
      <SobreMin/>
    </main>
  );
}
