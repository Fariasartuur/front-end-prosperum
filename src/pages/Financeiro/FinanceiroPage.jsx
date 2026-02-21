import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
import styles from './Financeiro.module.css'
import { useState } from 'react';
import FinanceChart from '../../components/FinanceChart';

const FinanceiroPage = () => {
    const [chartType, setChartType] = useState('bar');

    return (
        <main className={styles.container}>
            <section className={styles.welcome}>
                <h3>Bem-Estar Financeiro</h3>
                <span className='material-symbols-rounded'>cardiology</span>
                <p className={styles.descricao}>Saudavel</p>
            </section>

            <section className={styles.resumo}>

                <section className={styles.financeCards}>
                    <Card>
                        <h3>Receita Total</h3>
                        <p className={styles.receitaTotal}>R$ 0,00</p>
                    </Card>
                    <Card>
                        <h3>Despesa Total</h3>
                        <p className={styles.despesaTotal}>R$ 0,00</p>
                    </Card>
                    <Card>
                        <h3>Lucro Líquido</h3>
                        <p className={styles.lucroLiquido}>R$ 0,00</p>
                    </Card>
                    <Card>
                        <h3>Margem de Lucro</h3>
                        <p className={styles.margemLucro}>0%</p>
                    </Card>
                    <Card>
                        <h3>Capital de Giro</h3>
                        <p className={styles.capitalGiro}>R$ 0,00</p>
                    </Card>
                    <Card>
                        <h3>Índice de Liquidez</h3>
                        <p className={styles.indiceLiquidez}>0</p>
                    </Card>
                </section>

            </section>

            <section className={styles.opcoes}>
                <div className={styles.graficoArea}>
                    <FinanceChart type={chartType} />
                </div>

                <div className={styles.botoes}>
                    <Dropdown placeHolder="Grafico">
                        <button onClick={() => setChartType('line')}>Linha</button>
                        <button onClick={() => setChartType('bar')}>Barra</button>
                    </Dropdown>

                    <Dropdown placeHolder="Periodo">
                        <button>Mensal</button>
                        <button>Trimestral</button>
                        <button>Semestral</button>
                    </Dropdown>
                </div>

            </section>


        </main>
    );
};

export default FinanceiroPage;