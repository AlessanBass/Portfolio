'use client';
import servicos from "@/styles/servicos.module.css";

export default function Servicos() {
    return(
        <div className={`${servicos.divServicos}`} id="servicos">
            <h2 className={`${servicos.h2}`}>SERVIÇOS</h2>
        </div>
    );
}