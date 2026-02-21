import { useState } from 'react';
import { useModalStore } from '../store/useModalStore.js';

export const useEntityActions = (initialData, entityName) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState(initialData);
    const closeActions = useModalStore((state) => state.closeActions);

    const toggleEditing = () => setIsEditing(!isEditing);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let finalValue = type === 'checkbox' ? checked : value;

        if (type === 'number' && value !== '') {
            finalValue = Number(value);
        }

        setFormData(prev => ({
            ...prev,
            [name]: finalValue
        }));
    };

    const handleListChange = (listName, index, field, value) => {
        setFormData(prev => {
            const updatedList = [...prev[listName]];
            updatedList[index] = { ...updatedList[index], [field]: value };
            return { ...prev, [listName]: updatedList };
        });
    };

    const handleDelete = async (deleteFn, id, name) => {
        if (!window.confirm(`Tem certeza que deseja excluir ${entityName} ${name}`)) return;

        try {
            const response = await deleteFn(id);

            if (response.ok) {
                alert("Excluído com sucesso!");
                window.dispatchEvent(new Event("itemCreated"));
                closeActions();
            }

        } catch (error) {
            console.error(error);
            alert("Erro ao excluir: " + error.message);
        }
    };

    const handleEdit = async (updateFn, id) => {
        setIsSaving(true);

        try {
            const response = await updateFn(id, formData);

            if (response.ok) {
                alert("Atualizado com sucesso!");
                window.dispatchEvent(new Event("itemUpdated"));
                closeActions();
            }

        } catch (error) {
            alert(error.message);
            throw error;
        } finally {
            setIsSaving(false);
        }
    };

    return {
        isEditing, isSaving, formData, 
        toggleEditing, handleChange, handleListChange, handleDelete, handleEdit
    };
}