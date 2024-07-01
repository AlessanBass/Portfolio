'use client';
import { useRouter } from "next/navigation";
import styleSobreMin from "@/app/styles/sobre.module.css";
import imageSobre from "../../../public/icon_banner.jpeg";
import { Card } from "primereact/card";
import projetosData from "../../../public/projetos/projetos.json";
import Link from "next/link";

interface Projetos {
    projetoId: number;
    title: string;
    description: string;
    imageTitle: string;
}

export default function SobreMim() {
    const router = useRouter();
    const projetos: Projetos[] = projetosData;
    const handleCardClick = (id: number) => {
        router.push(`pages/projeto/${id}`);
    };

    return (
        <div className={`${styleSobreMin.divSobre}`} id="sobre">
            <h2 className={`${styleSobreMin.h2}`}>PROJETOS</h2>
            <Link href='projeto/2'> clique aqui</Link>

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