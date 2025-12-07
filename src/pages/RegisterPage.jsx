import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import {
  FiFileText,
  FiUser,
  FiAtSign,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLoader
} from 'react-icons/fi';

import styles from './RegisterPage.module.css';

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await api.post('/auth/register/', data);
      
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro no cadastro', error);

      const serverMsg = error.request?.responseText ?? '';

      if (serverMsg.includes('already exists')) {
        alert('Usuário ou e‑mail já cadastrado.');
      } else {
        alert('Erro ao cadastrar usuário. Verifique os dados.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>

      {/* card de cadastro */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>

        <div className={styles.formIcon}>
          <FiFileText />
        </div>

        <h2>Crie sua Conta</h2>
        <p className={styles.subtitle}>Preencha os dados para se cadastrar</p>

        {/* campo usuário (username) */}
        <div className={styles.inputGroup}>
          <label htmlFor="username">Usuário</label>
          <div className={`${styles.inputField} ${errors.username ? styles.errorBorder : ''}`}>
            <FiUser className={styles.icon} />
            <input
              id="username"
              type="text"
              placeholder="seu.usuario"
              {...register('username', { 
                required: 'O usuário é obrigatório',
                minLength: {
                  value: 5,
                  message: 'O usuário deve ter pelo menos 5 caracteres'
                },
                maxLength: {
                  value: 30,
                  message: 'O usuário deve ter no máximo 30 caracteres'
                },
                pattern: {
                  value: /^[\w.@+-]+$/, 
                  message: 'Apenas letras, números e @ . + - _'
                }
              })}
            />
          </div>
          {errors.username && <span className={styles.errorMessage}>{errors.username.message}</span>}
        </div>

        {/* campo email (email) */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <div className={`${styles.inputField} ${errors.email ? styles.errorBorder : ''}`}>
            <FiAtSign className={styles.icon} />
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register('email', { 
                required: 'O email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
            />
          </div>
          {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
        </div>

        {/* campo senha (password) */}
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <div className={`${styles.inputField} ${errors.password ? styles.errorBorder : ''}`}>
            <FiLock className={styles.icon} />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              {...register('password', { 
                required: 'A senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'A senha deve ter no mínimo 6 caracteres'
                },
                maxLength: {
                  value: 30,
                  message: 'A senha deve ter no máximo 30 caracteres'
                }
              })}
            />
            {showPassword ? (
              <FiEyeOff
                className={`${styles.icon} ${styles.iconRight}`}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FiEye
                className={`${styles.icon} ${styles.iconRight}`}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
        </div>

        {/* --- termo de uso --- */}
        <div className={styles.termsGroup}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="terms"
              {...register('terms', { 
                required: 'Você precisa aceitar os termos para continuar.' 
              })}
            />
            <label htmlFor="terms">
              Li e aceito os <Link to="/termos-de-servico" target="_blank">Termos de Serviço</Link> e a <Link to="/privacidade" target="_blank">Política de Privacidade</Link>.
            </label>
          </div>
          {errors.terms && <span className={styles.errorMessage}>{errors.terms.message}</span>}
        </div>

        {/* botão de cadastrar (submit) */}
        <button type="submit" className={styles.loginButton} disabled={isLoading}>
          {isLoading ? (
            <>
              <FiLoader className={styles.spinner} /> Cadastrando...
            </>
          ) : (
            "Cadastrar"
          )}
        </button>

        {/* link de login */}
        <div className={styles.signupLink}>
          Já tem uma conta?{' '}
          <Link to="/login">Faça o login</Link>
        </div>
      </form>

      <footer className={styles.footer}>
        © 2025 Sistema OS. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default RegisterPage;
