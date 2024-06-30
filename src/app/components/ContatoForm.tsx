'use client';
import { Button, TextField } from "@mui/material";
import style from "@/app/styles/contatoform.module.css";


export default function ContatoForm() {
    return (
        <div>
            <form className={`${style.form}`}>
                <h3 className={`${style.h3}`}>Entre em contato comigo</h3>
                <TextField className={`${style.input}`} id="outlined-basic" label="Nome" variant="outlined" />
                <TextField className={`${style.input}`} id="outlined-basic" label="Email" variant="outlined" />
                <TextField className={`${style.input}`} id="outlined-basic" label="Assunto" variant="outlined" />
                <TextField className={`${style.input}`} id="outlined-basic" label="Texto" variant="outlined" />
                <Button variant="contained" color="success">
                    Enviar
                </Button>
            </form>
        </div>

    );
}