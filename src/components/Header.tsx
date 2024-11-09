import stylesHeader from "@/styles/header.module.css";
import logo from "../../public/logo.png"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className={`${stylesHeader.header}`}>

            <Link className={`${stylesHeader.link}`} href="/">
                {/* <Image className={`${stylesHeader.logo}`} src={logo}  alt="Logo Alessandro C. Santos"></Image> */}
                <h1>Alessandro
                    <span className={`${stylesHeader.span}`} >Dev</span>
                </h1>
            </Link>

            <div className={`${stylesHeader.divLinks}`}>
                <Link className={`${stylesHeader.link}`} href="/#sobre">Sobre mim</Link>|
                <Link className={`${stylesHeader.link}`} href="/#projetos">Projetos</Link>|
                <Link className={`${stylesHeader.link}`} href="/#servicos">Serviços</Link>|
                <Link className={`${stylesHeader.link}`} href="/#contato">Contato</Link>
            </div>
        </header>
    );
}