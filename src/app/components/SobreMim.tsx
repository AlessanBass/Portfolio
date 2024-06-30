'use client';
import styleSobreMin from "@/app/styles/sobre.module.css";
import imageSobre from "../../../public/icon_banner.jpeg";
import Image from "next/image";
import teste from "../../../public/banner_main.jpg";
import { Card } from "primereact/card";


export default function SobreMim() {

    const header = (
        <img alt="Card" src={teste.src} className={`${styleSobreMin.imgCard}`}/>
    );

    return (
        <div className={`${styleSobreMin.divSobre}`} id="sobre">
            <h2 className={`${styleSobreMin.h2}`}>PROJETOS</h2>

            <div className={`${styleSobreMin.biografia}`}>
                <Card header={header} className={`${styleSobreMin.card}`}>
                    <div className={`${styleSobreMin.cardBody}`}>
                        <h2 className={`${styleSobreMin.h2Card}`}>Aloca + Match</h2>
                         <p>
                            Projeto criado com base no meu TCC
                         </p>
                    </div>
                </Card>

                <Card header={header} className={`${styleSobreMin.card}`}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </div>
    );
}