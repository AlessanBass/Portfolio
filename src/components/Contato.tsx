'use client';
import contato from "@/styles/contato.module.css";
import ContatoForm from "./ContatoForm";

export default function Contato() {
    return(
        <div className={`${contato.divContato}`} id="contato">
            <h2 className={`${contato.h2}`}>CONTATO</h2>
            <ContatoForm/>
        </div>
    );
}