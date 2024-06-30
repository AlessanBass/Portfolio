import stylesHeader from "@/app/styles/header.module.css";
import logo from "../../../public/logo.png"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className={`${stylesHeader.header}`}>

            <Link href="/">
                <Image className={`${stylesHeader.logo}`} src={logo}  alt="Logo Alessandro C. Santos"></Image>
            </Link>

            <div className={`${stylesHeader.divLinks}`}>
                <Link className={`${stylesHeader.link}`} href="sobre">Sobre mim</Link>|
                <Link className={`${stylesHeader.link}`} href="teste">Projetos</Link>|
                <Link className={`${stylesHeader.link}`} href="teste">Serviços</Link>|
                <Link className={`${stylesHeader.link}`} href="teste">Contato</Link>
            </div>
        </header>
    );
}