import styles from './Home.module.css'
import Card from '../../components/Card';
import Display from '../../components/Display';
import FinanceChart from '../../components/FinanceChart';
import ChatWidget from '../../components/ChatWidget';

const Home = () => {

    return (
        <main className={styles.container}>
            <section className={styles.welcome}>
                <h1>Bem-vindo de volta, <span className={styles.userName}>Usuário!</span></h1>
                <p>Confira um resumo do seu desempenho financeiro e suas próximas tarefas.</p>
            </section>
            
            <section className={styles.desempenho}>
                <div className={styles.graficoArea}>
                    <FinanceChart type='bar' />
                </div>
                <div className={styles.cardsWrapper}>
                    <Card>
                        <h3>Receita Total</h3>
                        <p className={`${styles.verde} ${styles.valor}`}>R$ 0,00</p>
                    </Card>

                    <Card>
                        <h3>Despesa Total</h3>
                        <p className={`${styles.vermelho} ${styles.valor}`}>R$ 0,00</p>
                    </Card>
                    <Card>
                        <h3>Lucro Líquido</h3>
                        <p className={`${styles.azul} ${styles.valor}`}>R$ 0,00</p>
                    </Card>
                    <Card>
                        <h3>Margem de Lucro</h3>
                        <p className={`${styles.laranja} ${styles.valor}`}>0%</p>
                    </Card>
                </div>
            </section>

            <section className={styles.atualizacoes}>
                <Display className={styles.compromissos} title="Compromissos">
                    <div className={styles.cards}></div>
                </Display>

                <Display className={styles.tarefas} title="Tarefas">
                    <div className={styles.cards}></div>
                </Display>

                <Display className={styles.registros} title="Registros">
                    <div className={styles.cards}></div>
                </Display>
            </section>

            <ChatWidget />
        </main>
    );
};

export default Home