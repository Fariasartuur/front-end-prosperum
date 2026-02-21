import style from "./Mentoria.module.css";
import { useModalStore } from "../../store/useModalStore.js";
import { useState } from "react";

const MentoriaModal = () => {
    const { mentoriaData } = useModalStore();
    const [openIndex, setOpenIndex] = useState(null);

    if (!mentoriaData) return null;

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>{mentoriaData.titulo}</h2>
                <p className={style.subtitle}>{mentoriaData.conteudoModal.introducao}</p>
            </div>

            <div className={style.topics}>
                {mentoriaData.conteudoModal.topicos.map((topico, index) => (
                    <div key={index} className={style.topic}>
                        <div className={style.topicHeader} >
                            <h3>{topico.titulo}</h3>
                            <a onClick={() => setOpenIndex(openIndex === index ? null : index)}>{openIndex === index ? <span className="material-symbols-rounded">remove</span> : <span className="material-symbols-rounded">add</span>}</a>
                        </div>
                        {openIndex === index && (
                            <div className={style.topicContent}>
                                <p>{topico.instrucao}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className={style.topicFooter}>
                    <h3>Perguntas Frenquentes</h3>
                </div>
                {mentoriaData.conteudoModal.perguntasFrequentes.map((pergunta, index) => (
                    <div key={index} className={style.topic}>
                        <div className={style.topicHeader} >
                            <h3>{pergunta.pergunta}</h3>
                            <a onClick={() => setOpenIndex(openIndex === index ? null : index)}>{openIndex === index ? <span className="material-symbols-rounded">remove</span> : <span className="material-symbols-rounded">add</span>}</a>
                        </div>
                        {openIndex === index && (
                            <div className={style.topicContent}>
                                <p>{pergunta.resposta}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentoriaModal;