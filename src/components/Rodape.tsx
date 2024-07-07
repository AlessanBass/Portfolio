import styleRodape from "@/styles/rodape.module.css";
import Link from "next/link";

export default function Rodape() {
    return(
        <div className={styleRodape.rodape}>
            <nav>
                <Link className={styleRodape.iconsRedeSocial} target="_blank" href="https://github.com/AlessanBass">
                    <i className="fa-brands fa-github"></i>
                </Link>

                <Link className={styleRodape.iconsRedeSocial} target="_blank"  href="https://wa.me/5573981780689">
                    <i className="fa-brands fa-whatsapp"></i>
                </Link>


                <Link className={styleRodape.iconsRedeSocial} target="_blank"  href="https://www.linkedin.com/in/alessandro-concei%C3%A7%C3%A3o-santos-184768243/">
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
            </nav>
           
           
            
            <hr className={styleRodape.hr}/>
            <h4 className={styleRodape.h4}>Desenvolvido por: <span className={styleRodape.animatedunderline}>Alessandro C. Santos</span></h4>
            <h5 className={styleRodape.h5}> Copyright  &copy; 2024</h5>

        </div>
    );
}