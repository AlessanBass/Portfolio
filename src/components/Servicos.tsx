import React, { useState, useEffect } from "react";
import servicos from "@/styles/servicos.module.css";


export default function Servicos() {
   
    return (
        <div className={servicos.servicosContainer} id="servicos">
          {/*   <div className={servicos.codigoMatrix}>fff</div> */}
            <h2 className={servicos.h2}>SERVIÇOS</h2>

            <div className={servicos.listagemDeServicos}>
                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Desenvolvimento de APIs REST</h3>
                        <p>
                            Criação de APIs escaláveis para comunicação entre o frontend e o backend,
                            permitindo que diferentes sistemas se integrem e troquem dados de forma segura e eficiente.
                        </p>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Gestão de Banco de Dados</h3>
                        <p>
                            Design, otimização e manutenção de bancos de dados relacionais e não-relacionais.
                        </p>
                    </div>
               
                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Integração com Serviços de Terceiros</h3>
                        <p>Integração de APIs e serviços externos, como sistemas de pagamento, redes sociais, 
                            sistemas de envio de e-mails e notificações, entre outros.</p>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Desenvolvimento de Microserviços</h3>
                        <p>Arquitetura de sistemas baseados em microserviços,
                            permitindo maior flexibilidade e escalabilidade ao sistema.</p>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Testes Unitários</h3>
                        <p>Implementação de testes unitários, testes de integração 
                            e testes de carga.</p>
                    </div>

                    <div className={servicos.escopoDeServico}>
                        <h3 className={servicos.h3}>Documentação de APIs e Endpoints</h3>
                        <p>Criação de documentação detalhada de APIs e endpoints, facilitando o uso e a integração por outros desenvolvedores e clientes.</p>
                    </div>
            </div>
        </div>
    );
}
