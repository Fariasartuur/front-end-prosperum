import { CLIENTE_COLUMNS } from "../../constants/table.constants";
import Table from '../../components/Table/Table.jsx';

const ClientePage = () => {
    const data = [
        {
            nome: "Cliente 1",
            email: "cliente@gmail.com",
            telefone: "123456789",
            endereco: "Rua Exemplo, 123",
            status: "Ativo",
            dataEntrega: "2024-12-31T23:59",
            dataCadastro: "2024-01-01T12:00"
        }
    ]
    return (
        <Table columns={CLIENTE_COLUMNS} data={data} />
    );
};

export default ClientePage;