'use client';
import banner from "../../public/banner_main.jpg";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "primereact/button";
import Link from "next/link";
import style from "@/styles/banner.module.css";
export default function BannerPrincipal() {
    return (
        <div className={`${style.bannerPrincipal}`}>
            <div className={`${style.elementos}`}>
                <Image alt="Logo Alessandro" src={`${logo.src}`} width={400} height={400} className={`${style.img}`}/>
                <Link href="#sobre" className={`${style.link}`}> Projetos </Link>
            </div>
        </div>

    );
}