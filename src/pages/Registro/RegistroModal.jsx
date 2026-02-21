import { useState } from "react";
import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";
import { useModalStore } from "../../store/useModalStore.js";
import style from "./Registro.module.css";

const RegistroModal = () => {
    const [loading, setLoading] = useState(false);
    const closeRegistro = useModalStore((state) => state.closeRegister);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        status: "Ativo",
        dataCadastro: "",
        dataEntrega: "",
        endereco: ""
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

        alert("Registro criado com sucesso!");
        setLoading(false);
        closeRegistro();


    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>Cadastrar Registro</h2>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.grid}>
                    <Input
                        label="Titulo do Registro"
                        type="text"
                        name="titulo"
                        placeholder="Titulo do Registro"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Descrição"
                        type="text"
                        name="descricao"
                        placeholder="Descrição do Registro"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                    <Input
                        label="Valor"
                        type="number"
                        name="valor"
                        placeholder="Valor do Registro"
                        value={formData.valor}
                        onChange={handleChange}
                    />
                    <Input
                        label="Tipo"
                        type="text"
                        name="tipo"
                        placeholder="Tipo do Registro"
                        value={formData.tipo}
                        onChange={handleChange}
                    />
                    <Input
                        label="Data"
                        type="datetime-local"
                        name="dataCadastro"
                        value={formData.data}
                        onChange={handleChange}
                    />
                    
                </div>

                <div className={style.checkboxGroup}>
                    <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={handleChange}
                        id="registro-active"
                    />
                    <label htmlFor="registro-active" className={style.checkboxLabel}>
                        Registro Ativo
                    </label>
                </div>

                <Button type="submit" disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar'}
                </Button>
            </form>
        </div>
    );

};

export default RegistroModal;