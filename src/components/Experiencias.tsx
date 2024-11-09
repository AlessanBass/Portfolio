import style from "@/styles/experiencias.module.css";

export default function Experiencias() {
    return (
        <div className={`${style.divExperiencias}`}>
            <h2 className={`${style.h2}`}>EXPERIÊNCIAS</h2>

            <div className={`${style.containerExperiencias}`}>
                <div className={`${style.experiencia}`}>

                    <div className={`${style.cargoHeader}`}>
                        <i className="fa-solid fa-wrench"></i>
                        <h3>Desenvolvedor Backend .NET - (2024)</h3>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>  <span className={`${style.span}`}>
                            <i className={`fa-solid fa-house ${style.icon}`}></i>
                            Empresa:
                        </span>
                            Centro de Pesquisa e Desenvolvimento Tecnológico em Informática e Eletroeletrônica de Ilhéus – CEPEDI
                        </p>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>  <span className={`${style.span}`}>
                            <i className={`fa-solid fa-calendar-days ${style.icon}`}></i>
                            Período:
                        </span>
                            6 meses – Atualmente
                        </p>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>
                            <span className={`${style.span}`}>
                                <i className={`fa-solid fa-list-check ${style.icon}`}></i>
                                Principais responsabilidades:
                            </span>
                            Desenvolvimento de  funcionalidades em diferentes projetos,
                            integração e conexão com APIs externas, criação e manuntenção de testes
                            unitários utilizando Moq, autenticação via tokens JWT e participação em sprints
                            seguindo a metodologia ágil Scrum e utilização de pricípios SOLID/Clean Architecture.
                        </p>
                    </div>
                </div>

                <div className={`${style.experiencia}`}>

                    <div className={`${style.cargoHeader}`}>
                        <i className="fa-solid fa-wrench"></i>
                        <h3>Residente - (2023 - 2024)</h3>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>  <span className={`${style.span}`}>
                            <i className={`fa-solid fa-house ${style.icon}`}></i>
                            Empresa:
                        </span>
                            Residência em Software – CEPEDI
                        </p>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>  <span className={`${style.span}`}>
                            <i className={`fa-solid fa-calendar-days ${style.icon}`}></i>
                            Período:
                        </span>
                            1 ano e 3 meses 
                        </p>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>
                            <span className={`${style.span}`}>
                                <i className={`fa-solid fa-list-check ${style.icon}`}></i>
                                Principais responsabilidades:
                            </span>
                                Domínio dos principais recursos e práticas para desenvolvimento de soluções 
                                robustas e escaláveis. Implementação de mapeamento objeto-relacional (Entity Framework). 
                                Aplicação de padrões de design e arquitetura limpa para garantir um código organizado, 
                                de fácil manutenção e alta escalabilidade. Participação ativa em todas as fases do desenvolvimento de projetos 
                                completos, integrando front e backend.
                        </p>
                    </div>
                </div>

                <div className={`${style.experiencia}`}>

                    <div className={`${style.cargoHeader}`}>
                        <i className="fa-solid fa-wrench"></i>
                        <h3>Bolsista - (2020 - 2021)</h3>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>  <span className={`${style.span}`}>
                            <i className={`fa-solid fa-house ${style.icon}`}></i>
                            Empresa:
                        </span>
                            Iniciação Científica – FAPESB
                        </p>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>  <span className={`${style.span}`}>
                            <i className={`fa-solid fa-calendar-days ${style.icon}`}></i>
                            Período:
                        </span>
                            1 ano e 4 meses
                        </p>
                    </div>

                    <div className={`${style.dados}`}>
                        <p>
                            <span className={`${style.span}`}>
                                <i className={`fa-solid fa-list-check ${style.icon}`}></i>
                                Principais responsabilidades:
                            </span>
                            Desenvolvimento de uma aplicação de gerenciamento inteligente de água.
                            A aplicação foi projetada utilizando Node.js e JavaScript para o backend,
                            proporcionando um ambiente robusto e escalável.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}