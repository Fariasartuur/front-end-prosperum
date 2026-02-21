import MentoringCard from "../../components/MentoringCard";
import styles from './Mentoria.module.css';
import MentoriaModal from "./MentoriaModal.jsx";
import { useModalStore } from "../../store/useModalStore.js";
import mentoringData from "../../assets/data/mentoriaData.json";

const MentoriaPage = () => {
    const openMentoria = useModalStore((state) => state.openMentoria);

    return (
        <main className={styles.container}>
            <div className={styles.mentoriaList}>
                <div className={styles.mentoriaCards}>
                    {mentoringData.map((item) => (
                        <MentoringCard 
                            key={item.id}
                            title={item.titulo}
                            description={item.descricao}
                            onClick={() => openMentoria(item)}
                        />
                    ))}
                </div>
            </div>
            
        </main>
    );
};

export default MentoriaPage;