import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import { ROUTES } from './constants/routes.constants'
import HomePage from './pages/Home/HomePage'
import AgendaPage from './pages/Agenda/AgendaPage'
import FinanceiroPage from './pages/Financeiro/FinanceiroPage'
import MentoriaPage from './pages/Mentoria/MentoriaPage'
import TarefaPage from './pages/Tarefa/TarefaPage'
import RegistroPage from './pages/Registro/RegistroPage'
import ClientePage from './pages/Cliente/ClientePage'
import LoginPage from './pages/Login/LoginPage'
import EsqueceuSenhaPage from './pages/Login/EsqueceuSenhaPage'
import ConfiguracaoPage from './pages/Configuracoes/ConfiguracaoPage'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ESQUECEU_SENHA} element={<EsqueceuSenhaPage />} />

      <Route path={ROUTES.DASHBOARD} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.AGENDA} element={<AgendaPage />} />
        <Route path={ROUTES.FINANCEIRO} element={<FinanceiroPage />} />
        <Route path={ROUTES.MENTORIA} element={<MentoriaPage />} />
        <Route path={ROUTES.TAREFAS} element={<TarefaPage />} />
        <Route path={ROUTES.REGISTROS} element={<RegistroPage />} />
        <Route path={ROUTES.CLIENTES} element={<ClientePage />} />
        <Route path={ROUTES.CONFIGURACOES} element={<ConfiguracaoPage />} />
      </Route>
    </Routes>
      
  )
}

export default App
