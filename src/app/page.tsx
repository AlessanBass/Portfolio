'use client';
import BannerPrincipal from "./components/BannerPrincipal";
import Header from "./components/Header";
import Servicos from "./components/Servicos";
import SobreMin from "./components/SobreMim";


export default function Home() {
  return (
    <main>
      <Header/>
      <BannerPrincipal/>
      <SobreMin/>
      <Servicos/>
    </main>
  );
}
