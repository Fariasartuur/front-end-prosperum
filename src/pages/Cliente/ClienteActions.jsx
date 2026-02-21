import { useEntityActions } from "../../hooks/useEntityActions";
import style from "./Cliente.module.css"
import Button from "../../components/Button";

const ClienteActions = ({ cliente }) => {
    const { isEditing, isSaving, formData, toggleEditing, handleChange, handleEdit, handleDelete
    } = useEntityActions(
        {
            nome: cliente.nome, email: cliente.email,
            telefone: cliente.telefone, dataCadastro: cliente.dataCadastro, 
            dataEntrega: cliente.dataEntrega, endereco: cliente.endereco, status: cliente.status
        },
        "o cliente"
    );

    return (
        <div>
            {isEditing ? (
                <>
                    <div>
                        <p className={style.titulo}>Editando: {cliente.nome}.</p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p className={style.nome}>{cliente.nome}</p>
                        <p className={style.email}> Email: {cliente.email} </p>
                        <p className={style.telefone}> Telefone: {cliente.telefone} </p>
                        <p className={style.dataCadastro}> Data de Cadastro: {cliente.dataCadastro} </p>
                        <p className={style.dataEntrega}> Data de Entrega: {cliente.dataEntrega} </p>
                        <p className={style.endereco}> Endereço: {cliente.endereco} </p>
                        <p className={style.status}> Status: {cliente.status ? "Ativo" : "Inativo"} </p>
                    </div>
                </>
            )}
            <div className={`${style.actionsContainer} ${isEditing ? style.isEditing : style.isViewing}`}>
                <Button onClick={toggleEditing} className={style.editBtn}>
                    {isEditing ? "Cancelar" : "Editar"}
                </Button>

                <Button
                    className={style.deleteBtn}
                >
                    Excluir
                </Button>

                {isEditing && (
                    <Button
                        className={style.saveBtn}
                        type="submit"
                        disabled={isSaving}
                        form="edit-cliente-form"
                    >
                        {isSaving ? "Salvando..." : "Salvar alterações"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ClienteActions;