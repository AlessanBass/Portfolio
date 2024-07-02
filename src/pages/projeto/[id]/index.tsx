import Header from "@/components/Header";
import { useRouter } from "next/router";
import projetosData from "../../../../public/projetos/projetos.json";
import { useEffect, useRef, useState } from "react";
import style from "@/styles/projetoIndividual.module.css";
import Image from "next/image";
import React from "react";
import { Galleria } from 'primereact/galleria';

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
    const [images, setImages] = useState<any[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef<any>(null);

    useEffect(() => {
        if (id) {
            const projetoEncontrado = projetosData.find((proj: Projeto) => proj.projetoId === parseInt(id as string));
            setProjeto(projetoEncontrado || null);

            if (projetoEncontrado) {
                document.title = projetoEncontrado.title;
                const formattedImages = projetoEncontrado.imagens?.map(img => ({
                    itemImageSrc: img,
                    thumbnailImageSrc: img,
                    alt: projetoEncontrado.title
                })) || [];
                setImages(formattedImages);
            }
        }
    }, [id]);

    const itemTemplate = (item: { itemImageSrc: string | undefined; alt: string | undefined; }) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: { thumbnailImageSrc: string | undefined; alt: string | undefined; }) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }


    if (!projeto) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Header />
            <div className={`${style.section1}}`}>
                <h1 className={`${style.h1}`}> INFORMAÇÕES</h1>
                <div className={style.containerPrincipal}>
                    <img className={`${style.img}`} src={projeto.imageTitle} alt={projeto.title} />
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
                {projeto && (
                    <div>
                        {images && images.length > 0 && (
                            <div className={`${style.containerPai}`}>
                                <Galleria className={`${style.gallery} ${style.customgalleria}`} ref={galleria} value={images} numVisible={7} style={{ maxWidth: '100%' }}
                                    activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                                    circular fullScreen showItemNavigators showThumbnails={false}
                                    item={itemTemplate} thumbnail={thumbnailTemplate} 
                                    
                                    />
                                <div className={`${style.containerImgs}`}>
                                    {images.map((image, index) => (
                                        <div className="" key={index}>
                                            <img className={`${style.imgGalerry}`} src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={() => {
                                                setActiveIndex(index);
                                                if (galleria.current) {
                                                    setActiveIndex(index);
                                                    galleria.current.show();
                                                }
                                            }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

{/* <div className={style.imageGallery}>
                    {projeto.imagens?.map((imagem, index) => (
                        <Image key={index} src={imagem} alt={`Imagem ${index + 1}`} width={500} height={300} />
                    ))}
                </div> */}