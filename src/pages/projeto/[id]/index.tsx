import Header from "@/components/Header";
import { useRouter } from "next/router";
import projetosData from "../../../../public/projetos/projetos.json";
import { useEffect, useState } from "react";
import style from "@/styles/projetoIndividual.module.css";
import React from "react";
import Link from "next/link";

interface Projeto {
    projetoId: number;
    title: string;
    description: string;
    imageTitle: string;
    imagens?: string[];
    textos?: string[];
    front?: string[];
    back?: string[];
    banco?: string[];
    github?: string;
    noAr?: string;
}

export default function Projeto() {
    const router = useRouter();
    const { id } = router.query;
    const [projeto, setProjeto] = useState<Projeto | null>(null);
    const [images, setImages] = useState<any[]>([]);
    const [currentImage, setCurrentImage] = useState<number | null>(null);

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

    const openModal = (imageIndex: number) => {
        setCurrentImage(imageIndex);
    };

    const closeModal = () => {
        setCurrentImage(null);
    };

    const showNextImage = () => {
        setCurrentImage((prevImage) => (prevImage! + 1) % images.length);
    };

    const showPrevImage = () => {
        setCurrentImage((prevImage) => (prevImage! - 1 + images.length) % images.length);
    };

    if (!projeto) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Header />
            <div className={`${style.section1}`}>
                <h1 className={`${style.h1}`}>INFORMAÇÕES</h1>
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
            <div className={`${style.section2}`}>
                <h1 className={`${style.h1}`}>TECNOLOGIAS UTILIZADAS</h1>
                <div className={`${style.conatinerTecPai}`}>
                    <div className={`${style.containerTecnologias}`}>
                        <h2 className={`${style.h2}`}>
                            <div className={`${style.cabecalhoH2}`}>
                                <i className="fa-solid fa-code"></i>
                                Frontend
                            </div>
                        </h2>
                        {projeto.front && projeto.front.length > 0 && (
                            <ul className={`${style.ul}`}>
                                {projeto.front.map((front, index) => (
                                    <li key={index}> {front}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h2 className={`${style.h2}`}>
                            <div className={`${style.cabecalhoH2}`}>
                                <i className="fa-solid fa-server"></i>
                                Backend
                            </div>
                        </h2>
                        {projeto.back && projeto.back.length > 0 && (
                            <ul className={`${style.ul}`}>
                                {projeto.back.map((back, index) => (
                                    <li key={index}> {back}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h2 className={`${style.h2}`}>
                            <div className={`${style.cabecalhoH2}`}>
                                <i className="fa-solid fa-database"></i>
                                Banco de Dados
                            </div>
                        </h2>
                        {projeto.banco && projeto.banco.length > 0 && (
                            <ul className={`${style.ul}`}>
                                {projeto.banco.map((banco, index) => (
                                    <li key={index}> {banco}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h2 className={`${style.h2}`}>
                            <div className={`${style.cabecalhoH2}`}>
                                <i className="fa-solid fa-circle-info"></i>
                                Informações
                            </div>
                        </h2>
                        <ul className={`${style.ul}`}>
                            <li>
                                <i className="fa-brands fa-github"></i>
                                {projeto.github && <Link target="_blank" href={projeto.github}>Acesse aqui</Link>}
                            </li>

                            {projeto.noAr &&
                                <li>
                                    <Link target="_blank" href={projeto.noAr}>Acesse aqui</Link>
                                </li>
                            }

                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${style.section1}`}>
                <h1 className={`${style.h1}`}>GALERIA DE IMAGENS</h1>
                <div>
                    {images && images.length > 0 && (
                        <div className={`${style.containerPai}`}>
                            <div className={`${style.containerImgs}`}>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            className={`${style.imgGalerry}`}
                                            src={image.thumbnailImageSrc}
                                            alt={image.alt}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => openModal(index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {currentImage !== null && (
                <div className={style.modal} onClick={closeModal}>
                    <span className={style.closeButton} onClick={closeModal}>&times;</span>
                    <img className={style.modalContent} src={images[currentImage].thumbnailImageSrc} alt={images[currentImage].alt} />
                    <div className={style.controls}>
                        <button onClick={(e) => { e.stopPropagation(); showPrevImage(); }}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); showNextImage(); }}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
