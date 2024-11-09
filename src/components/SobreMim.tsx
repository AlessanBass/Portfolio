'use client';
import banner from "../../public/banner_main.jpg";
import Image from "next/image";
import tecnologias from "../../public/tecnologias.png";
import dotnet from "../../public/tecnologias/donet.png"
import csharp from "../../public/tecnologias/csharp.png"
import node from "../../public/tecnologias/node.png"
import nest from "../../public/tecnologias/nest.png"
import java from "../../public/tecnologias/java.png"
import nucleo from "../../public/tecnologias/nucelo.png"
import style from "@/styles/sobremim2.module.css";
export default function BannerPrincipal() {
    return (
        <div className={`${style.divSobre}`} id="sobre">
            <h2 className={`${style.h2}`}>SOBRE MIM</h2>
            <div className={`${style.containerInfosSobreMim}`}>
                {/* <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${tecnologias.src}`} width={550} height={400}/> */}
                <div className={`${style.textSobremim}`}>
                    Olá, sou Alessandro! Sou um desenvolvedor Backend com experiência prática em .NET, C#, e Node.js. 
                    Sou graduado em Ciência da Computação e atualmente trabalho no desenvolvimento de soluções 
                    escaláveis e robustas com uma abordagem ágil e foco em princípios SOLID e boas práticas de 
                    desenvolvimento. Com forte habilidade em integração de APIs e construção de testes unitários, 
                    busco sempre aplicar novas tecnologias para otimizar processos e entregar bons resultados.
                </div>
                <div className={`${style.containerImgs}`} >
                    <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${dotnet.src}`} width={90} height={90}/> 
                    <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${csharp.src}`} width={130} height={130}/> 
                    <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${node.src}`} width={120} height={120}/> 
                    <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${nest.src}`} width={120} height={120}/> 
                    <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${java.src}`} width={120} height={120}/> 
                    <Image alt="Logo Alessandro" className={`${style.imgTecnologias}`} src={`${nucleo.src}`} width={120} height={120}/> 
                </div>
            </div>

        </div>

    );
}