import { create } from 'zustand';

export const useChatStore = create((set) => ({
  isOpen: false,
  messages: [{ role: 'assistant', content: 'Olá! Sou seu assistente financeiro. Como posso ajudar hoje?' }],
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
}));