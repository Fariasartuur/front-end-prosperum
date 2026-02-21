import styles from "./Agenda.module.css"
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const AgendaPage = () => {
    const [activeTab, setActiveTab] = useState("appointments");
    const [dateTimeDropdown, setDateTimeDropdown] = useState(false);

    const handleDropDown = () => {
        setDateTimeDropdown(!dateTimeDropdown);
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <main className={styles.container}>
            <div className={styles.pageGrid}>

                <div className={styles.leftPanel}>

                    <div className={styles.tabs}>
                        <button className={`${styles.tab} ${activeTab === 'appointments' ? styles.active : ''}`}
                            onClick={() => handleTabClick('appointments')}
                        >
                            Compromissos
                        </button>
                        <button className={`${styles.tab} ${activeTab === 'events' ? styles.active : ''}`}
                            onClick={() => handleTabClick('events')}
                        >
                            Eventos
                        </button>
                    </div>

                    {activeTab === 'appointments' && (
                        <div className={`${styles.tabContent} ${styles.active}`}>
                            <form className={styles.agendaForm}>
                                <Input type="text" placeholder="Nome do compromisso" />
                                <Input type="text" placeholder="Descrição" />
                                <Input type="text" placeholder="Localização" />

                                <div className={styles.datetime}>
                                    <div className={styles.datetimeHeader} onClick={handleDropDown}>
                                        <span className={`${styles.scheduleIcon} material-symbols-rounded`}>schedule</span>
                                        <span>Dia e Hora</span>

                                        <label className={styles.toggle}>
                                            <input type="checkbox" id="all-day" />
                                            <span className={styles.slider}></span>
                                            <span>Dia todo</span>
                                        </label>
                                    </div>

                                    <div className={`${styles.datetimeContent} ${dateTimeDropdown ? styles.show : styles.hide}`}>
                                        <div className={styles.field}>
                                            <label>Em</label>
                                            <Input type="date" />
                                        </div>

                                        <div className={styles.field}>
                                            <label>De</label>
                                            <Input type="time" id="time-start" />
                                        </div>

                                        <div className={styles.field}>
                                            <label>Até</label>
                                            <Input type="time" id="time-end" />
                                        </div>

                                    </div>
                                </div>

                                <Button type="submit" className={styles.saveButton}>Salvar Compromisso</Button>
                            </form>
                        </div>
                    )}

                    {/* Conteúdo de Eventos */}
                    {activeTab === 'events' && (
                        <div className={`${styles.tabContent}`} id="event">
                            <div id="eventosContainer"></div>
                        </div>
                    )}

                </div>

                <div className={styles.rightPanel}>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale="pt-br"
                        events={[
                            { title: 'Reunião Prosperum', date: '2026-02-20' },
                            { title: 'Aula UNASP', date: '2026-02-21' }
                        ]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,dayGridWeek'
                        }}
                    />
                </div>

            </div>
        </main>
    );
};

export default AgendaPage;

