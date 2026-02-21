import styles from './Header.module.css';
import img from '../../assets/account.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants';

const Header = ({ title }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.userInfo}>
                    <span className="material-symbols-rounded">notifications</span>

                    <div className={styles.userDetails}>
                        <img src={img} alt="User Avatar" className={styles.userAvatar} />
                        <div className={styles.userText}>
                            <span>Usuário</span>
                            <p>Admin</p>
                        </div>

                        <button
                            className={styles.menuTrigger}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-rounded">
                                {isMenuOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                            </span>
                        </button>

                        {isMenuOpen && (
                            <div className={styles.customDropdown}>
                                <Link to={ROUTES.CONFIGURACOES} className={styles.dropdownLink}>
                                    <div className={styles.dropdownItem}>
                                        <span className="material-symbols-rounded">settings</span>
                                        Configurações
                                    </div>
                                </Link>
                                <Link to={ROUTES.LOGIN} className={styles.logoutLink}>
                                    <div className={`${styles.dropdownItem} ${styles.logout}`}>
                                        <span className="material-symbols-rounded">logout</span>
                                        Sair
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <div className={styles.borderBottom} />
        </>

    );
};

export default Header;