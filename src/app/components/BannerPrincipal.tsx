'use client';
import banner from "@/app/styles/banner.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Button } from "primereact/button";
import Link from "next/link";
export default function BannerPrincipal() {
    return (
        <div className={`${banner.bannerPrincipal}`}>
            <div className={`${banner.elementos}`}>
                <Image alt="Logo Alessandro" src={`${logo.src}`} width={400} height={400} className={`${banner.img}`}/>
                {/* <Link href="#sobre" className={`${banner.link}`}> Projetos </Link> */}
            </div>
        </div>

    );
}