import { create } from 'zustand';

export const useModalStore = create((set) => ({
    isTaskOpen: false,
    isClientOpen: false,
    isRegisterOpen: false,
    isActionsOpen: false,
    isMentoriaOpen: false,

    openTask: () => set({ isTaskOpen: true }),
    closeTask: () => set({ isTaskOpen: false }),
    openClient: () => set({ isClientOpen: true }),
    closeClient: () => set({ isClientOpen: false }),
    openRegister: () => set({ isRegisterOpen: true }),
    closeRegister: () => set({ isRegisterOpen: false }),

    mentoriaData: null,

    openMentoria: (mentoriaData) => set({ 
        isMentoriaOpen: true,
        mentoriaData: mentoriaData
    }),
    closeMentoria: () => set({ 
        isMentoriaOpen: false,
        mentoriaData: null
    }),

    selectedItem: null,
    

    openActions: (item) => set({
        isActionsOpen: true,
        selectedItem: item
    }),

    closeActions: () => set({
        isActionsOpen: false,
        selectedItem: null
    }),
}));