import styles from './Sidebar.module.css'
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants';
import Logo from '../Logo'

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const location = useLocation();

    const activeItem = Object.values(ROUTES).find(route => route === location.pathname) || ROUTES.DASHBOARD;

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            <header className={styles.sidebarHeader}>
                <a className={styles.headerLogo}>
                    <Logo color='#ffffff' size={46} />
                </a>
                <button onClick={toggleSidebar} className={`${styles.sidebarToggler} ${styles.toggler}`}>
                    <span className="material-symbols-rounded">chevron_left</span>
                </button>
            </header>

            <nav className={styles.sidebarNav}>
                <ul className={`${styles.navList} ${styles.primaryNav}`}>
                    <li className={`${styles.navItem} ${activeItem === ROUTES.DASHBOARD ? styles.active : ''}`}>
                        <Link to={ROUTES.DASHBOARD} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>home</span>
                            <span className={styles.navLabel}>Home</span>
                        </Link>
                        <span className={styles.navTooltip}>Home</span>
                    </li>
                    <li className={`${styles.navItem} ${activeItem === ROUTES.AGENDA ? styles.active : ''}`}>
                        <Link to={ROUTES.AGENDA} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>calendar_today</span>
                            <span className={styles.navLabel}>Agenda</span>
                        </Link>
                        <span className={styles.navTooltip}>Agenda</span>
                    </li>
                    <li className={`${styles.navItem} ${activeItem === ROUTES.FINANCEIRO ? styles.active : ''}`}>
                        <Link to={ROUTES.FINANCEIRO} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>finance</span>
                            <span className={styles.navLabel}>Financeiro</span>
                        </Link>
                        <span className={styles.navTooltip}>Financeiro</span>
                    </li>
                    <li className={`${styles.navItem} ${activeItem === ROUTES.MENTORIA ? styles.active : ''}`}>
                        <Link to={ROUTES.MENTORIA} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>model_training</span>
                            <span className={styles.navLabel}>Mentoria</span>
                        </Link>
                        <span className={styles.navTooltip}>Mentoria</span>
                    </li>
                    <li className={`${styles.navItem} ${activeItem === ROUTES.TAREFAS ? styles.active : ''}`}>
                        <Link to={ROUTES.TAREFAS} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>task</span>
                            <span className={styles.navLabel}>Tarefas</span>
                        </Link>
                        <span className={styles.navTooltip}>Tarefas</span>
                    </li>
                    <li className={`${styles.navItem} ${activeItem === ROUTES.REGISTROS ? styles.active : ''}`}>
                        <Link to={ROUTES.REGISTROS} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>assignment</span>
                            <span className={styles.navLabel}>Registros</span>
                        </Link>
                        <span className={styles.navTooltip}>Registros</span>
                    </li>

                    <li className={`${styles.navItem} ${activeItem === ROUTES.CLIENTES ? styles.active : ''}`}>
                        <Link to={ROUTES.CLIENTES} className={styles.navLink}>
                            <span className={`${styles.navIcon} material-symbols-rounded`}>groups</span>
                            <span className={styles.navLabel}>Clientes</span>
                        </Link>
                        <span className={styles.navTooltip}>Clientes</span>
                    </li>

                </ul>

                <ul className={`${styles.navList} ${styles.secondaryNav}`}>
                    
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;