import { useState } from "react";
import { useModalStore } from "../../store/useModalStore";
import { useLocation } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import style from './Table.module.css'

const Table = ({ columns, data }) => {
    const location = useLocation();

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const openTask = useModalStore((state) => state.openTask);
    const openActions = useModalStore((state) => state.openActions);
    const openCliente = useModalStore((state) => state.openClient);
    const openRegistro = useModalStore((state) => state.openRegister);

    const headerButton = {
            '/tarefas': <Button onClick={openTask}>Nova Tarefa</Button>,
            '/clientes': <Button onClick={openCliente}>Novo Cliente</Button>,
            '/registros': <Button onClick={openRegistro}>Novo Registro</Button>,
        }


    const filteredData = data.filter(row => {
        // Busca global em todas as colunas visíveis
        const searchMatch = Object.values(row).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filtro de Status (se aplicável ao dado)
        const statusMatch = activeFilters.status
            ? String(row.statusName || row.status || row.active).toLowerCase() === activeFilters.status.toLowerCase()
            : true;

        return searchMatch && statusMatch;
    }).sort((a, b) => {
        // Ordenação Simples
        if (activeFilters.sort === 'name') {
            return (a.nome || a.name || "").localeCompare(b.nome || b.name || "");
        }
        return 0;
    });

    return (
        <div className="overflow-x-auto rounded-lg border border-emerald-600 shadow-sm">
            <div className={style.opcoes}>
                <Input
                    type="search"
                    className={style.search}
                    placeholder="Pesquisar..."
                    icon="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className={style.botoes}>
                    <Button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={style.filterButton}
                    >
                        Filtros
                    </Button>

                    {headerButton[location.pathname] && (
                        <div>
                            {headerButton[location.pathname]}
                        </div>
                    )}

                </div>
            </div>

            {isFilterOpen && (
                <div className={style.filterBar}>
                    <div className={style.filterGroup}>
                        <label className={style.label}>Status</label>
                        <select
                            value={activeFilters.status || ""}
                            onChange={(e) => setActiveFilters({ ...activeFilters, status: e.target.value })}
                            className={style.select}
                        >
                            <option value="">Todos</option>
                            <option value="active">Ativos</option>
                            <option value="inactive">Inativos</option>
                        </select>
                    </div>

                    <div className={style.filterGroup}>
                        <label className={style.label}>Ordenar por</label>
                        <select
                            value={activeFilters.sort || "name"}
                            onChange={(e) => setActiveFilters({ ...activeFilters, sort: e.target.value })}
                            className={style.select}
                        >
                            <option value="name">Nome (A-Z)</option>
                            <option value="date">Data Recente</option>
                        </select>
                    </div>

                    <button
                        onClick={() => { setSearchTerm(""); setActiveFilters({ status: "", sort: "name" }) }}
                        className={style.clearButton}
                    >
                        Limpar tudo
                    </button>

                    <button onClick={() => setIsFilterOpen(false)} className={style.closeButton}>
                        <span className="material-symbols-rounded">close</span>
                    </button>
                </div>
            )}

            <br/>

            <table className={style.table}>
                <thead className={style.thead}>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className={style.th}>
                                {col.header}
                            </th>
                        ))}
                        <th className={style.th}>Ações</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex} className={style.tr}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className={style.td}>
                                        {typeof col.accessor === 'function'
                                            ? col.accessor(row)
                                            : row[col.accessor]}
                                    </td>
                                ))}
                                <td className={style.actionsTd} onClick={() => openActions(row)}>
                                    <span className="material-symbols-rounded">more_horiz</span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length + 1} className={style.empty}>
                                Nenhum registro encontrado "{searchTerm}".
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;