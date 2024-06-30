'use client';
import { Button, TextField } from "@mui/material";
import style from "@/app/styles/contatoform.module.css";
import { useState } from "react";


export default function ContatoForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        /* const mailtoLink = `mailto:acsantos.cic@uesc.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink; */
        
        // Formatação do corpo do e-mail
        const body = `${encodeURIComponent(message)}`;
        
        // Construção do link do Gmail
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=acsantos.cic@uesc.br&su=${encodeURIComponent(subject)}&body=${body}`;
        
        // Abrir o link em uma nova aba
        window.open(gmailLink, '_blank');
    };

    return (
        <div>
            <form className={`${style.form}`} onSubmit={handleSubmit}>
                <h3 className={`${style.h3}`}>Entre em contato comigo</h3>
                <TextField className={`${style.input}`} id="outlined-basic" onChange={handleChange} value={formData.name}  name="name" label="Nome" variant="outlined" required/>
                <TextField className={`${style.input}`} id="outlined-basic" onChange={handleChange} value={formData.email} name="email" label="Email" variant="outlined" required/>
                <TextField className={`${style.input}`} id="outlined-basic" onChange={handleChange} value={formData.subject} name="subject" label="Assunto" variant="outlined" required/>
                <TextField className={`${style.input}`} id="outlined-basic" onChange={handleChange} value={formData.message} name="message" label="Texto" variant="outlined" required/>
                <Button type="submit" variant="contained" color="success">
                    Enviar
                </Button>
            </form>
        </div>

    );
}