import React, { useState, useEffect } from "react";
import servicos from "@/styles/servicos.module.css";


export default function Servicos() {
   
    return (
        <div className={servicos.servicosContainer} id="servicos">
          {/*   <div className={servicos.codigoMatrix}>fff</div> */}
            <h2 className={servicos.h2}>SERVIÇOS</h2>

            <div className={servicos.listagemDeServicos}>
                    {/* <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Desenvolvimento Backend e API's</h3>

                        <ul className={servicos.ul}>
                            <li>Criação de APIs robustas e seguras usando .NET e Node.js.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div> */}

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários e Qualidade de Código</h3>

                        <ul className={servicos.ul}>
                            <li>Desenvolvimento e manutenção de testes unitários com Xunit e bibliotecas de assertions como ShouldBe para garantir a robustez do sistema.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários e Qualidade de Código</h3>

                        <ul className={servicos.ul}>
                            <li>Desenvolvimento e manutenção de testes unitários com Xunit e bibliotecas de assertions como ShouldBe para garantir a robustez do sistema.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div>


                        
                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários e Qualidade de Código</h3>

                        <ul className={servicos.ul}>
                            <li>Desenvolvimento e manutenção de testes unitários com Xunit e bibliotecas de assertions como ShouldBe para garantir a robustez do sistema.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div>

                    
                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários e Qualidade de Código</h3>

                        <ul className={servicos.ul}>
                            <li>Desenvolvimento e manutenção de testes unitários com Xunit e bibliotecas de assertions como ShouldBe para garantir a robustez do sistema.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários e Qualidade de Código</h3>

                        <ul className={servicos.ul}>
                            <li>Desenvolvimento e manutenção de testes unitários com Xunit e bibliotecas de assertions como ShouldBe para garantir a robustez do sistema.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários e Qualidade de Código</h3>

                        <ul className={servicos.ul}>
                            <li>Desenvolvimento e manutenção de testes unitários com Xunit e bibliotecas de assertions como ShouldBe para garantir a robustez do sistema.</li>
                            <li>Implementação de arquitetura modular, garantindo escalabilidade e facilidade de manutenção.</li>
                            <li>Criação de APIs RESTful, com camadas de autenticação e autorização para controlar o acesso.</li>
                        </ul>
                    </div>
                

            </div>

        </div>
    );
}
