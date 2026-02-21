import { useEntityActions } from "../../hooks/useEntityActions";
import style from "./Tarefa.module.css"
import Button from "../../components/Button";

const TarefaActions = ({ tarefa }) => {
    const { isEditing, isSaving, formData, toggleEditing, handleChange, handleEdit, handleDelete
    } = useEntityActions(
        {
            titulo: tarefa.titulo, descricao: tarefa.descricao,
            prazo: tarefa.prazo, tipo: tarefa.tipo, andamento: tarefa.andamento
        },
        "a tarefa"
    );

    return (
        <div>
            {isEditing ? (
                <>
                    <div>
                        <p className={style.titulo}>Editando: {tarefa.titulo}.</p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p className={style.titulo}>{tarefa.titulo}</p>
                        <p className={style.descricao}> {tarefa.descricao} </p>
                        <p className={style.prazo}> Prazo: {tarefa.prazo} </p>
                        <p className={style.tipo}> Tipo: {tarefa.tipo} </p>
                        <p className={style.andamento}> Andamento: {tarefa.andamento ? "Ativo" : "Inativo"} </p>
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
                        form="edit-tarefa-form"
                    >
                        {isSaving ? "Salvando..." : "Salvar alterações"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default TarefaActions;