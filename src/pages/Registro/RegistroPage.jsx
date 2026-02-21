import { REGISTRO_COLUMNS } from "../../constants/table.constants";
import Table from '../../components/Table/Table.jsx';

const RegistroPage = () => {
    const data = [
        {
            titulo: "Mercado",
            descricao: "Compra de alimentos",
            valor: 150.75,
            tipo: "Despesa",
            data: "2024-01-01T12:00"
        }
    ]
    return (
        <Table columns={REGISTRO_COLUMNS} data={data} />
    );
};

export default RegistroPage;