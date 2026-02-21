import { useModalStore } from '../../store/useModalStore.js'
import TarefaActions from '../../pages/Tarefa/TarefaActions.jsx';
import ClienteActions from '../../pages/Cliente/ClienteActions.jsx'
import RegistroActions from '../../pages/Registro/RegistroActions.jsx'

const TableActions = ({page}) => {
    const selectedItem = useModalStore((state) => state.selectedItem);

    if (!selectedItem) return null;

    const renderContent = () => {
        console.log(page);
        switch (page) {
            case '/tarefas': return <TarefaActions tarefa={selectedItem} />;
            case '/clientes': return <ClienteActions cliente={selectedItem} />;
            case '/registros': return <RegistroActions registro={selectedItem} />;
            default: return <p className="p-4">Conteúdo não mapeado.</p>;
        }
    };

    return (
        <div className="w-full">
            {renderContent()}
        </div>
    );
};

export default TableActions;