export const TAREFA_COLUMNS = [
    {
        header: "Titulo",
        accessor: "titulo"
    },
    {
        header: "Descrição",
        accessor: "descricao"
    },
    {
        header: "Prazo",
        accessor: (row) => new Date(row.prazo).toLocaleString()
    },
    {
        header: "Tipo",
        accessor: "tipo"
    },
    {
        header: "Andamento",
        accessor: "andamento"
    }
];

export const CLIENTE_COLUMNS = [
    {
        header: "Nome",
        accessor: "nome"
    },
    {
        header: "Email",
        accessor: "email"
    },
    {
        header: "Telefone",
        accessor: "telefone"
    },
    {
        header: "Data Cadastro",
        accessor: (row) => new Date(row.dataCadastro).toLocaleDateString()
    },
    {
        header: "Data Entrega",
        accessor: (row) => new Date(row.dataEntrega).toLocaleDateString()
    },
    {
        header: "Endereço",
        accessor: "endereco"
    },
    {
        header: "Status",
        accessor: "status"
    }
];

export const REGISTRO_COLUMNS = [
    {
        header: "Titulo",
        accessor: "titulo"
    },
    {
        header: "Descrição",
        accessor: "descricao"
    },
    {
        header: "Valor",
        accessor: (row) => `R$ ${row.valor.toFixed(2)}`
    },
    {
        header: "Data", 
        accessor: (row) => new Date(row.data).toLocaleString()
    }
];
    