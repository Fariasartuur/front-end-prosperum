import styles from './MentoringCard.module.css';

const MentoringCard = ({ title, description, className, onClick }) => {
    return (
        <div className={`${styles.mentoriaCard} ${className || ''}`}>
            <div className={styles.infButton}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button className={styles.openBtn} onClick={onClick}>Ver Mais</button>
        </div>
    );
};

export default MentoringCard;