import { useState, useRef, useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
  const { isOpen, messages, addMessage, toggleChat } = useChatStore();
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    addMessage(userMsg);
    setInput('');

    // Aqui entrará sua chamada para a API da IA futuramente
    // Simulação de resposta:
    setTimeout(() => {
      addMessage({ role: 'assistant', content: 'Estou analisando seus dados financeiros...' });
    }, 1000);
  };

  return (
    <div className={styles.chatContainer}>

      <button className={styles.floatingBtn} onClick={toggleChat}>
        <span className="material-symbols-rounded">{isOpen ? 'close' : 'smart_toy'}</span>
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Assistente IA</h3>
          </div>
          
          <div className={styles.messageList} ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                {msg.content}
              </div>
            ))}
          </div>

          <form className={styles.chatInput} onSubmit={handleSend}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte algo..."
            />
            <button type="submit">
              <span className="material-symbols-rounded">send</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;