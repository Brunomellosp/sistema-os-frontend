import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LegalPages.module.css';

function TermsOfServicePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.documentCard}>
        <header className={styles.header}>
          <h1>Termos de Serviço</h1>
        </header>

        <div className={styles.content}>
          <p>
            Bem-vindo à plataforma SIGOS. Ao acessar ou usar nosso sistema de gestão de ordens de serviço, você concorda em cumprir e estar vinculado aos seguintes termos e condições.
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao criar uma conta ou utilizar nossos serviços, você confirma que leu, entendeu e concorda com estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, você não deve utilizar nossos serviços.
          </p>

          <h2>2. Responsabilidades do Usuário</h2>
          <p>
            Você é responsável por manter a confidencialidade das informações da sua conta, incluindo sua senha. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram sob sua conta.
          </p>
          <ul>
            <li>Você deve fornecer informações precisas e completas durante o registro.</li>
            <li>Você não deve usar o serviço para qualquer finalidade ilegal ou não autorizada.</li>
            <li>Você não deve tentar violar a segurança do sistema ou acessar dados de outros usuários.</li>
          </ul>

          <h2>3. Uso do Serviço</h2>
          <p>
            Concedemos a você uma licença limitada, não exclusiva e intransferível para usar nosso software exclusivamente para fins de gestão interna de ordens de serviço. O Sistema OS reserva-se o direito de modificar ou descontinuar o serviço a qualquer momento, com ou sem aviso prévio.
          </p>

          <h2>4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, design, gráficos, código e software utilizados no Sistema OS são propriedade exclusiva da nossa empresa e estão protegidos pelas leis de direitos autorais e propriedade intelectual.
          </p>

          <h2>5. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância o Sistema OS será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
          </p>

          <h2>6. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos, entre em contato conosco através do e-mail: suporte@sigos.com.br.
          </p>
        </div>

      </div>
    </div>
  );
}

export default TermsOfServicePage;
