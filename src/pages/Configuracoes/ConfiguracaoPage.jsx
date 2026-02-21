import style from './ConfiguracaoPage.module.css'
import { useState } from 'react';
import SettingsSection from '../../components/SettingsSection';

const ConfiguracaoPage = () => {
    const [activeTab, setActiveTab] = useState('Geral');

    const tabs = ['Geral', 'Notificações', 'Segurança', 'Conta'];

    return (
        <div>
            <div className={style.tabs}>
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`${style.tab} ${activeTab === tab ? style.active : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className={style.content}>
                {activeTab === 'Geral' && <GeralSettings />}
                {activeTab === 'Notificações' && <NotificacoesSettings />}
                {activeTab === 'Segurança' && <SegurancaSettings />}
                {activeTab === 'Conta' && <ContaSettings />}
            </div>

        </div>
    );
};

const GeralSettings = () => {
    return (
        <div className={style.geralSettings}>
            <SettingsSection 
                title="Perfil"
                description="Atualize suas informações."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Preferências"
                description="Configure suas preferências."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Idioma e Moeda"
                description="Selecione seu idioma preferido e a moeda da sua conta."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Privacidade"
                description="Configure suas preferências de privacidade."
            >
                <h3>teste</h3>
            </SettingsSection>
        </div>
    );
}

const NotificacoesSettings = () => {
    return (
        <div className={style.notificacoesSettings}>

            <SettingsSection 
                title="Alerta de Gastos"
                description="Definir limite de gastos."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Lembrete de Contas"
                description="Definir lembretes para contas pendentes."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Canal de Recebimentos"
                description="Configure os canais de recebimento para suas notificações."
            >
                <h3>teste</h3>
            </SettingsSection>
        </div>
    );
}

const SegurancaSettings = () => {
    return (
        <div className={style.segurancaSettings}>
            <SettingsSection 
                title="Alterar Senha"
                description="Definir nova senha para sua conta."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Autenticação em Duas Etapas"
                description="Configure autenticação de dois fatores para sua conta."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Sessões Ativas"
                description="Revise e encerre sessões ativas em outros dispositivos."
            >
                <h3>teste</h3>
            </SettingsSection>
        </div>
    );
}

const ContaSettings = () => {
    return (
        <div className={style.contaSettings}>
            <SettingsSection 
                title="Exportar Dados"
                description="Exporte seus dados para um arquivo CSV, PDF ou JSON."
            >
                <h3>teste</h3>
            </SettingsSection>

            <SettingsSection 
                title="Excluir Conta"
                description="Exclua permanentemente sua conta e todos os dados associados."
            >
                <h3>teste</h3>
            </SettingsSection>
        </div>
    );
}

export default ConfiguracaoPage;