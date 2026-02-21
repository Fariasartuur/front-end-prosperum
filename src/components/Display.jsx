import styles from './Display.module.css';
import Button from './Button';

const Display = ({ children, className, title }) => {
    return (
        <section className={className}>
            <div className={styles.cardHeader}>
                <h2>{title}</h2>
                <Button className={styles.newButton}>Novo +</Button>
            </div>
            {children}
        </section>
    );
}

export default Display;