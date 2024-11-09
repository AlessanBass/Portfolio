import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import BannerPrincipal from "@/components/BannerPrincipal";
import Contato from "@/components/Contato";
import Servicos from "@/components/Servicos";
import SobreMim from "@/components/SobreMim";
import Projetos from "@/components/Projetos";
import Rodape from "@/components/Rodape";
import Experiencias from "@/components/Experiencias";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon_page.png" />
      </Head>
      <Header/>
      <BannerPrincipal/>
      <SobreMim/>
      <Experiencias/>
      <Projetos/>
      <Servicos/>
      <Contato/>
      <Rodape/>
    </>
  );
}
