import Header from "@/components/Header";
import { useRouter } from "next/router";
import projetosData from "../../../../public/projetos/projetos.json";
import { useEffect, useState } from "react";

interface Projeto {
    projetoId: number;
    title: string;
    description: string;
    imageTitle: string;
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
            <div>
                <h1>{projeto.title}</h1>
                <p>{projeto.description}</p>
            </div>
        </>
    );
}
