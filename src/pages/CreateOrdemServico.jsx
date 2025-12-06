import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom'; // 👈 Link adicionado
import {
    FiCheckCircle,
    FiInfo,
    FiClock,
    FiActivity,
    FiArrowLeft,          // 👈 ícone adicionado
} from 'react-icons/fi';

import styles from './CreateOrdemServico.module.css';

const typeOptions = [
    { value: 'administrative', label: 'Administrativa' },
    { value: 'installation', label: 'Instalação' },
    { value: 'preventive_maintenance', label: 'Manutenção Preventiva' },
    { value: 'corrective_maintenance', label: 'Manutenção Corretiva' },
    { value: 'predictive_maintenance', label: 'Manutenção Preditiva' },
    { value: 'inspection', label: 'Vistoria' },
    { value: 'technical_assistance', label: 'Assistência Técnica' },
    { value: 'work_safety', label: 'Segurança do Trabalho' },
    { value: 'budget', label: 'Orçamento' },
    { value: 'events', label: 'Eventos' },
];

const statusOptions = [
    { value: 'open', label: 'Aberta' },
    { value: 'in_progress', label: 'Em andamento' },
    { value: 'completed', label: 'Concluída' },
    { value: 'cancelled', label: 'Cancelada' },
];

const providerOptions = [
    { value: 'technical', label: 'Técnico' },
    { value: 'specialized', label: 'Especializado' },
    { value: 'consulting', label: 'Consultivo' },
    { value: 'administrative_provider', label: 'Administrativo' },
    { value: 'logistics', label: 'Logístico' },
    { value: 'operational', label: 'Operacional' },
    { value: 'technological', label: 'Tecnológico' },
    { value: 'commercial', label: 'Comercial' },
    { value: 'maintenance_provider', label: 'Manutenção' },
    { value: 'security', label: 'Segurança' },
    { value: 'educational', label: 'Educacional' },
    { value: 'communication', label: 'Comunicação' },
    { value: 'other', label: 'Outros Serviços' },
];

const priorityOptions = [
    { value: 'critical', label: 'Crítica' },
    { value: 'high', label: 'Alta' },
    { value: 'medium', label: 'Média' },
    { value: 'low', label: 'Baixa' },
];

const slaPrazos = {
    critical: '4 horas',
    high: '24 horas',
    medium: '48 horas',
    low: '72 horas',
};

function CreateOrdemServico() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const selectedPriority = watch('priority');
    const [prazoCalculado, setPrazoCalculado] = useState('Selecione a prioridade');

    useEffect(() => {
        setPrazoCalculado(slaPrazos[selectedPriority] || 'Selecione a prioridade');
    }, [selectedPriority]);

    const onSubmit = async (data) => {
        try {
            await api.post('/ordens-servico/', data);
            alert('Ordem de Serviço criada com sucesso!');
            navigate('/');
        } catch (error) {
            console.error('Erro ao criar Ordem de Serviço:', error);
            alert('Erro ao criar O.S. Verifique os campos e tente novamente.');
        }
    };

    return (
        <div className={styles.pageContainer}>

            {/* 1. cabeçalho */}
            <header className={styles.header}>
                <div>
                    {/* 👇 Botão de voltar */}
                    <Link to="/" className={styles.backButton}>
                        <FiArrowLeft /> Voltar ao Dashboard
                    </Link>

                    <h2>Ordem de Serviço</h2>
                    <p>Cadastro e edição de ordens de serviço</p>
                </div>
                <div className={`${styles.statusBadge} ${styles.online}`}>
                    <FiCheckCircle /> Sistema Online
                </div>
            </header>

            {/* 2. layout do formulário (2 colunas) */}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formLayout}>

                {/* coluna principal (formulário) */}
                <div className={styles.mainForm}>
                    <div className={styles.card}>
                        <h3>Dados da Ordem de Serviço</h3>

                        <div className={styles.grid2cols}>
                            <InputGroup label="Protocolo" error={errors.protocol}>
                                <input
                                    placeholder="Ex: PROT-2025-001"
                                    {...register('protocol', { required: 'Campo obrigatório' })}
                                />
                            </InputGroup>

                            <InputGroup label="Número da O.S" error={errors.so_number}>
                                <input
                                    placeholder="Ex: OS-2025-001"
                                    {...register('so_number', { required: 'Campo obrigatório' })}
                                />
                            </InputGroup>

                            <InputGroup label="Tipo" error={errors.type}>
                                <select {...register('type', { required: 'Campo obrigatório' })}>
                                    <option value="">Selecione o tipo</option>
                                    {typeOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </InputGroup>

                            <InputGroup label="Status" error={errors.status}>
                                <select {...register('status', { required: 'Campo obrigatório' })}>
                                    <option value="">Selecione o status</option>
                                    {statusOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </InputGroup>
                        </div>

                        <h3 className={styles.sectionTitle}>Dados do Beneficiário</h3>
                        <div className={styles.grid2cols}>
                            <InputGroup label="Nome do Beneficiário" error={errors.recipient_name}>
                                <input
                                    placeholder="Nome completo"
                                    {...register('recipient_name', { required: 'Campo obrigatório' })}
                                />
                            </InputGroup>

                            <InputGroup label="CPF" error={errors.cpf}>
                                <input
                                    placeholder="000.000.000-00"
                                    {...register('cpf', { required: 'Campo obrigatório' })}
                                />
                            </InputGroup>
                        </div>

                        <div className={styles.grid2cols}>
                            <InputGroup label="Prestador" error={errors.provider}>
                                <select {...register('provider', { required: 'Campo obrigatório' })}>
                                    <option value="">Selecione o prestador</option>
                                    {providerOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </InputGroup>

                            <InputGroup label="Prioridade" error={errors.priority}>
                                <select {...register('priority', { required: 'Campo obrigatório' })}>
                                    <option value="">Selecione a prioridade</option>
                                    {priorityOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </InputGroup>
                        </div>

                        <h3 className={styles.sectionTitle}>Descrição</h3>
                        <InputGroup label="Descrição" error={errors.description}>
                            <textarea
                                placeholder="Descreva detalhadamente o serviço a ser realizado..."
                                rows="5"
                                {...register('description', { required: 'Campo obrigatório' })}
                            ></textarea>
                        </InputGroup>

                        <button type="submit" className={styles.submitButton}>
                            Salvar Ordem de Serviço
                        </button>
                    </div>
                </div>

                {/* coluna lateral (SLA) */}
                <aside className={styles.sidebar}>
                    <div className={styles.card}>
                        <h4 className={styles.slaTitle}>
                            <FiInfo /> Informações de SLA
                        </h4>

                        <SlaInfoBox
                            icon={<FiInfo />}
                            title="Prazo Calculado"
                            value={prazoCalculado}
                            subtitle="A partir da abertura"
                            theme="blue"
                        />

                        <SlaInfoBox
                            icon={<FiClock />}
                            title="Tempo Decorrido"
                            value="0h 0min"
                            subtitle="Desde a abertura"
                            theme="orange"
                        />

                        <SlaInfoBox
                            icon={<FiActivity />}
                            title="Status do SLA"
                            value="Aguardando dados"
                            subtitle=""
                            theme="gray"
                        />

                        <div className={styles.slaLegend}>
                            <h4>Prazos por Prioridade</h4>
                            <ul>
                                <li><span className={`${styles.dot} ${styles.critical}`}></span> Crítica: <strong>4 horas</strong></li>
                                <li><span className={`${styles.dot} ${styles.high}`}></span> Alta: <strong>24 horas</strong></li>
                                <li><span className={`${styles.dot} ${styles.medium}`}></span> Média: <strong>48 horas</strong></li>
                                <li><span className={`${styles.dot} ${styles.low}`}></span> Baixa: <strong>72 horas</strong></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </form>
        </div>
    );
}

const InputGroup = ({ label, children, error }) => (
    <div className={styles.inputGroup}>
        <label>{label}</label>
        {children}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
);

const SlaInfoBox = ({ icon, title, value, subtitle, theme }) => (
    <div className={`${styles.slaBox} ${styles[theme]}`}>
        <div className={styles.slaIcon}>{icon}</div>
        <div className={styles.slaContent}>
            <span className={styles.slaBoxTitle}>{title}</span>
            <strong className={styles.slaBoxValue}>{value}</strong>
            <span className={styles.slaBoxSubtitle}>{subtitle}</span>
        </div>
    </div>
);

export default CreateOrdemServico;
