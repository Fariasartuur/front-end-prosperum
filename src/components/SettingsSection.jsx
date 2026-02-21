import style from './SettingsSection.module.css';

const SettingsSection = ({ title, description, children }) => (
    <div className={style.sectionContainer}>
        <div className={style.section}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={style.sectionField}>
            {children}
        </div>
    </div>
);

export default SettingsSection;