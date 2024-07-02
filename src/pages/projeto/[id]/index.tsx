import Header from "@/components/Header";
import { useRouter } from "next/router";
import projetosData from "../../../../public/projetos/projetos.json";
import { useEffect, useState } from "react";
import style from "@/styles/projetoIndividual.module.css";
import Image from "next/image";
import React from "react";

interface Projeto {
    projetoId: number;
    title: string;
    description: string;
    imageTitle: string;
    imagens?: string[];
    textos?: string[];
}

export default function Projeto() {
    const router = useRouter();
    const { id } = router.query;
    const [projeto, setProjeto] = useState<Projeto | null>(null);

    useEffect(() => {
        if (id) {
            const projetoEncontrado = projetosData.find((proj: Projeto) => proj.projetoId === parseInt(id as string));
            setProjeto(projetoEncontrado || null);

            // Define o título da página
            if (projetoEncontrado) {
                document.title = projetoEncontrado.title;
            }
        }


    }, [id]);

    if (!projeto) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Header />
            <div className={`${style.section1}`}>
                <h1 className={`${style.h1}`}> INFORMAÇÕES</h1>
                <div className={style.containerPrincipal}>
                    <img className={`${style.img}`} src={projeto.imageTitle} alt={projeto.title} />
                    {/* <p className={style.p}>{projeto.description}</p> */}
                    <div className={`${style.containerParagrafo}`}>
                        {projeto.textos?.map((texto, index) => (
                            <React.Fragment key={index}>
                                {index === 0 ? <h2 className={style.pTitle}>{projeto.title}</h2> : null}
                                <p className={style.p}>{texto}</p>
                            </React.Fragment>

                        ))}
                    </div>
                </div>
            </div>
            {/* SECTION 2: Tecnologias Utilizadas - Links*/}         
            <div className={`${style.section2}`}>
                <h1 className={`${style.h1}`}> TECNOLOGIAS UTILIZADAS</h1>
            </div>

            {/* SECTION 3: Galeria */}         
            <div className={`${style.section1}`}>
                <h1 className={`${style.h1}`}> GALERIA DE IMAGENS</h1>
            </div>
        </>
    );
}

{/* <div className={style.imageGallery}>
                    {projeto.imagens?.map((imagem, index) => (
                        <Image key={index} src={imagem} alt={`Imagem ${index + 1}`} width={500} height={300} />
                    ))}
                </div> */}