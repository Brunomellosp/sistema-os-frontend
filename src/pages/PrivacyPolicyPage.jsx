import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LegalPages.module.css';

function PrivacyPolicyPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.documentCard}>
        <header className={styles.header}>
          <h1>Política de Privacidade</h1>
        </header>

        <div className={styles.content}>
          <p>
            Na plataforma SIGOS, a sua privacidade é uma prioridade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>

          <h2>1. Informações que Coletamos</h2>
          <p>
            Coletamos informações que você nos fornece diretamente ao criar uma conta, tais como:
          </p>
          <ul>
            <li>Nome completo e nome de usuário.</li>
            <li>Endereço de e-mail.</li>
            <li>Dados relacionados às ordens de serviço que você cria.</li>
          </ul>

          <h2>2. Como Usamos Suas Informações</h2>
          <p>
            Utilizamos as informações coletadas para:
          </p>
          <ul>
            <li>Fornecer, operar e manter nossos serviços.</li>
            <li>Melhorar, personalizar e expandir nossos serviços.</li>
            <li>Entender e analisar como você utiliza nosso sistema.</li>
            <li>Comunicar com você, seja diretamente ou através de um dos nossos parceiros, inclusive para atendimento ao cliente.</li>
            <li>Enviar e-mails relacionados ao sistema, como redefinição de senha e alertas de SLA.</li>
          </ul>

          <h2>3. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso, alteração, divulgação ou destruição não autorizados. No entanto, lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Utilizamos cookies e tecnologias semelhantes para rastrear a atividade em nosso serviço e manter certas informações. Você pode instruir seu navegador para recusar todos os cookies ou indicar quando um cookie está sendo enviado.
          </p>

          <h2>5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento através das configurações da sua conta ou entrando em contato conosco.
          </p>
        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
