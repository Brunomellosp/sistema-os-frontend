import React, { useState } from "react";
import Modal from "../common/Modal";

function AppFooter() {
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const year = new Date().getFullYear();

    return (
        <>
            <footer
                style={{
                    borderTop: '1px solid #e5e5e5',
                    backgroundColor: '#fff',
                    marginTop: '16px',
                }}
            >
                <div
                    style={{
                        maxWidth: '1100px',
                        margin: '0 auto',
                        padding: '8px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600 }}>
                            SIGOS – Sistema de Gestão de Ordens de Serviço
                        </span>
                        <span style={{ fontSize: '11px', color: '#777' }}>
                            © {year} – Todos os direitos reservados.
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '4px',
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => setIsTermsOpen(true)}
                            style={{
                                border: 'none',
                                background: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                fontSize: '11px',
                                textDecoration: 'underline',
                                textUnderlineOffset: '3px',
                                color: '#444',
                            }}
                        >
                            Termos de Uso
                        </button>

                        <span style={{ fontSize: '11px', color: '#aaa' }}>•</span>

                        <button
                            type="button"
                            onClick={() => setIsPrivacyOpen(true)}
                            style={{
                                border: 'none',
                                background: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                fontSize: '11px',
                                textDecoration: 'underline',
                                textUnderlineOffset: '3px',
                                color: '#444',
                            }}
                        >
                            Política de Privacidade
                        </button>
                    </div>
                </div>
            </footer>

            {/* MODAL – TERMOS DE USO */}
            <Modal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
                title="Termos de Uso – SIGOS"
            >
                <p>
                    Bem-vindo ao <strong>SIGOS – Sistema de Gestão de Ordens de Serviço</strong>.
                    Ao utilizar esta aplicação, você concorda com estes Termos de Uso.
                </p>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    1. Finalidade do Sistema
                </h3>
                <p>
                    O SIGOS tem como objetivo gerenciar ordens de serviço, desde a abertura,
                    acompanhamento e atualização de status até o encerramento, permitindo
                    rastreabilidade e auditoria das ações realizadas pelos usuários.
                </p>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    2. Responsabilidades do Usuário
                </h3>
                <ul style={{ marginLeft: '18px', marginTop: '4px' }}>
                    <li>Não compartilhar seu usuário e senha com terceiros;</li>
                    <li>Inserir informações verdadeiras nas ordens de serviço;</li>
                    <li>Respeitar as políticas internas da organização;</li>
                    <li>Utilizar o sistema apenas para fins autorizados.</li>
                </ul>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    3. Registro de Atividades
                </h3>
                <p>
                    Ações relevantes, como criação, edição e alteração de status de O.S.,
                    podem ser registradas em logs, vinculando a ação ao usuário responsável
                    e à data/hora, com objetivo de auditoria e segurança.
                </p>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    4. Suspensão de Acesso
                </h3>
                <p>
                    O acesso ao sistema poderá ser suspenso ou encerrado em caso de uso
                    indevido, violação destes termos ou descumprimento das políticas da empresa.
                </p>

                <p style={{ marginTop: '10px', fontSize: '11px', color: '#777' }}>
                    Em caso de dúvidas sobre estes termos, procure o administrador do sistema
                    ou o setor responsável.
                </p>
            </Modal>

            {/* MODAL – POLÍTICA DE PRIVACIDADE */}
            <Modal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
                title="Política de Privacidade – SIGOS"
            >
                <p>
                    Esta Política de Privacidade explica como os dados são tratados no
                    <strong> SIGOS – Sistema de Gestão de Ordens de Serviço</strong>.
                </p>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    1. Dados Coletados
                </h3>
                <p>Podemos coletar e armazenar, por exemplo:</p>
                <ul style={{ marginLeft: '18px', marginTop: '4px' }}>
                    <li>Nome, email e usuário de acesso;</li>
                    <li>Logs de login e ações realizadas no sistema;</li>
                    <li>
                        Informações relacionadas às ordens de serviço criadas, editadas ou
                        encerradas pelo usuário.
                    </li>
                </ul>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    2. Uso das Informações
                </h3>
                <p>
                    Os dados são utilizados para viabilizar o funcionamento do sistema,
                    garantir rastreabilidade, auditoria e segurança, além de atender
                    requisitos legais e de compliance internos.
                </p>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    3. Retenção de Dados
                </h3>
                <p>
                    Mesmo que um usuário seja desativado, alguns registros e logs poderão
                    ser mantidos para fins de auditoria, segurança e cumprimento de obrigações
                    legais ou contratuais.
                </p>

                <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '13px' }}>
                    4. Segurança
                </h3>
                <p>
                    Medidas técnicas e organizacionais são aplicadas para proteger os dados
                    contra acesso não autorizado, perda, alteração ou divulgação indevida.
                </p>

                <p style={{ marginTop: '10px', fontSize: '11px', color: '#777' }}>
                    Em caso de dúvidas sobre a privacidade dos dados, entre em contato com o
                    responsável pelo sistema ou pela área de TI.
                </p>
            </Modal>
        </>
    );
}

export default AppFooter;
