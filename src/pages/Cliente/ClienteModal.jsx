import { useState } from "react";
import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";
import { useModalStore } from "../../store/useModalStore.js";
import style from "./Cliente.module.css";

const ClienteModal = () => {
    const [loading, setLoading] = useState(false);
    const closeCliente = useModalStore((state) => state.closeCliente);

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

        alert("Cliente criado com sucesso!");
        setLoading(false);
        closeCliente();


    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>Cadastrar Cliente</h2>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.grid}>
                    <Input
                        label="Nome do Cliente"
                        type="text"
                        name="nome"
                        placeholder="Nome do Cliente"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Email do Cliente"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Telefone"
                        type="tel"
                        name="telefone"
                        placeholder="Telefone do Cliente"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                    <Input
                        label="Endereço"
                        type="text"
                        name="endereco"
                        placeholder="Endereço do Cliente"
                        value={formData.endereco}
                        onChange={handleChange}
                    />
                    <Input
                        label="Data de Cadastro"
                        type="datetime-local"
                        name="dataCadastro"
                        value={formData.dataCadastro}
                        onChange={handleChange}
                    />
                    <Input
                        label="Data de Entrega"
                        type="datetime-local"
                        name="dataEntrega"
                        value={formData.dataEntrega}
                        onChange={handleChange}
                    />
                </div>

                <div className={style.checkboxGroup}>
                    <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={handleChange}
                        id="cliente-active"
                    />
                    <label htmlFor="cliente-active" className={style.checkboxLabel}>
                        Cliente Ativo
                    </label>
                </div>

                <Button type="submit" disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar'}
                </Button>
            </form>
        </div>
    );

};

export default ClienteModal;