import { useLocation, Outlet } from "react-router-dom";
import { useState } from 'react';
import styles from './MainLayout.module.css'
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";
import { TITLES } from "../constants/app.constants"

import TableActions from "../components/Table/TableActions.jsx";
import { useModalStore } from "../store/useModalStore";
import Modal from "../components/Modal";
import TarefaModal from "../pages/Tarefa/TarefaModal";
import ClienteModal from "../pages/Cliente/ClienteModal.jsx";
import RegistroModal from "../pages/Registro/RegistroModal.jsx";
import MentoriaModal from "../pages/Mentoria/MentoriaModal.jsx";

const MainLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const {
        isTaskOpen, closeTask,
        isActionsOpen, closeActions,
        isClientOpen, closeClient,
        isRegisterOpen, closeRegister,
        isMentoriaOpen, closeMentoria
    } = useModalStore();

    const title = TITLES[location.pathname] || "Prosperum";

    return (
        <div className={styles.layout}>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`${styles.content} ${isCollapsed ? styles.contentCollapsed : styles.contentExpanded}`}>
                <Header title={title} />

                <main className={styles.mainInner}>
                    <Outlet />
                </main>
            </div>

            <Modal isOpen={isTaskOpen} onClose={closeTask}>
                <TarefaModal />
            </Modal>

            <Modal isOpen={isActionsOpen} onClose={closeActions}>
                <TableActions page={location.pathname} />
            </Modal>

            <Modal isOpen={isClientOpen} onClose={closeClient}>
                <ClienteModal />
            </Modal>

            <Modal isOpen={isRegisterOpen} onClose={closeRegister}>
                <RegistroModal />
            </Modal>

            <Modal isOpen={isMentoriaOpen} onClose={closeMentoria}>
                <MentoriaModal />
            </Modal>
        </div>
    );
};

export default MainLayout