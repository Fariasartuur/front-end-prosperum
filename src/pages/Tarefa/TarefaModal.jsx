import { useState } from "react";
import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";
import { useModalStore } from "../../store/useModalStore.js";
import style from "./Tarefa.module.css";

const TarefaModal = () => {
    const [loading, setLoading] = useState(false);
    const closeTarefa = useModalStore((state) => state.closeTarefa);

    const [formData, setFormData] = useState({
        titulo: "",
        descricao: "",
        prazo: "",
        tipo: "",
        andamento: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // todo: implementar lógica de criação de tarefa

        alert("Tarefa criada com sucesso!");
        setLoading(false);
        closeTarefa();


    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>Cadastrar Tarefa</h2>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.grid}>
                    <Input
                        label="Título da Tarefa"
                        type="text"
                        name="titulo"
                        placeholder="Título da Tarefa"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Descrição"
                        type="text"
                        name="descricao"
                        placeholder="Descrição da Tarefa"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                    <Input
                        label="Prazo"
                        type="datetime-local"
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleChange}
                    />
                    <Input
                        label="Tipo"
                        type="text"
                        name="tipo"
                        placeholder="Tipo da Tarefa"
                        value={formData.tipo}
                        onChange={handleChange}
                    />
                </div>

                <div className={style.checkboxGroup}>
                    <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={handleChange}
                        id="tarefa-active"
                    />
                    <label htmlFor="tarefa-active" className={style.checkboxLabel}>
                        Tarefa Ativa
                    </label>
                </div>

                <Button type="submit" disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar'}
                </Button>
            </form>
        </div>
    );

};

export default TarefaModal;