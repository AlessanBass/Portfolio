import React, { useState, useEffect } from "react";
import servicos from "@/styles/servicos.module.css";

interface Servico {
    nome: string;
}

interface TypingEffectProps {
    text: string;
    duration: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, duration }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index));
            index++;
            if (index > text.length) {
                index = 0;
            }
        }, duration / text.length);
        return () => clearInterval(interval);
    }, [text, duration]);

    return (
        <span className={servicos.typingEffect}>{displayedText}</span>
    );
};

export default function Servicos() {
    const [servicosList, setServicosList] = useState<Servico[]>([]);

    useEffect(() => {
        // Simula um carregamento assíncrono dos serviços
        const timer = setTimeout(() => {
            setServicosList([
                { nome: 'Desenvolvimento Web' },
                { nome: 'Criação de APIs' },
                { nome: 'Manutenção de Aplicações' },
                { nome: 'Integração de APIs e Serviços Externos' },
                { nome: 'Automação de Processos' }
            ]);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={servicos.servicosContainer} id="servicos">
            <div className={servicos.codigoMatrix}></div>
            <h2 className={servicos.h2}>SERVIÇOS</h2>

            {servicosList.map((servico, index) => (
                <div key={index} className={servicos.digitar}>
                    <TypingEffect text={servico.nome} duration={4000} />
                </div>
            ))}
        </div>
    );
}
