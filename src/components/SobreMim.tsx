'use client';
import styleSobreMin from "@/styles/sobre.module.css";
import imageSobre from "../../../public/icon_banner.jpeg";
import Image from "next/image";
import teste from "../../public/banner_main.jpg";
import { Card } from "primereact/card";
import projetosData from "../../public/projetos/projetos.json";
import Link from "next/link";
import { useRouter } from "next/router";

interface Projetos {
    projetoId: number;
    title: string;
    description: string;
    imageTitle: string;
}

export default function SobreMim() {
    const projetos: Projetos[] = projetosData;
    const router = useRouter();
    const handleCardClick = (id: number) => {
        router.push(`/projeto/${id}`);
    };

    return (
        <div className={`${styleSobreMin.divSobre}`} id="sobre">
            <h2 className={`${styleSobreMin.h2}`}>PROJETOS</h2>

            <div className={`${styleSobreMin.biografia}`}>
                {projetos.map((projeto, index) => (
                    <Card
                        key={projeto.projetoId}
                        header={<img alt="Card" src={projeto.imageTitle} className={`${styleSobreMin.imgCard}`} />}
                        className={`${styleSobreMin.card}`}
                        onClick={() => handleCardClick(projeto.projetoId)}
                    >
                        <div className={`${styleSobreMin.cardBody}`}>
                            <h2 className={`${styleSobreMin.h2Card}`}>{projeto.title}</h2>
                            <p className={`${styleSobreMin.pCard}`}>
                                {projeto.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}