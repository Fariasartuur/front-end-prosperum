import Table from '../../components/Table/Table';
import { TAREFA_COLUMNS as tarefasColumns } from '../../constants/table.constants';

const TarefaPage = () => {
    const data = [
        {
            titulo: "Tarefa 1",
            descricao: "Descrição da tarefa 1",
            prazo: "2024-12-31T23:59",
            tipo: "Trabalho",
            andamento: "Em Andamento"
        }
    ]
    return (
        <Table columns={tarefasColumns} data={data} />
    );

};

export default TarefaPage;