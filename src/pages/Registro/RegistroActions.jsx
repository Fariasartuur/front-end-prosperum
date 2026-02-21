import { useEntityActions } from "../../hooks/useEntityActions";
import style from "./Registro.module.css"
import Button from "../../components/Button";

const RegistroActions = ({ registro }) => {
    const { isEditing, isSaving, formData, toggleEditing, handleChange, handleEdit, handleDelete
    } = useEntityActions(
        {
            titulo: registro.nome, descricao: registro.descricao,
            valor: registro.valor, tipo: registro.tipo, 
            data: registro.data
        },
        "o registro"
    );

    return (
        <div>
            {isEditing ? (
                <>
                    <div>
                        <p className={style.titulo}>Editando: {registro.nome}.</p>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p className={style.nome}>{registro.nome}</p>
                        <p className={style.descricao}> Descrição: {registro.descricao} </p>
                        <p className={style.valor}> Valor: {registro.valor} </p>
                        <p className={style.tipo}> Tipo: {registro.tipo} </p>
                        <p className={style.data}> Data: {registro.data} </p>
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
                        form="edit-registro-form"
                    >
                        {isSaving ? "Salvando..." : "Salvar alterações"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default RegistroActions;