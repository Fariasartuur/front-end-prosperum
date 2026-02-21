import style from "./Input.module.css"

const Input = ({ 
    type = "text", 
    placeholder = "", 
    className = "", 
    value, 
    onChange, 
    name, 
    checked,
    disabled,
    label
 }) => {
    return (
        <div className={className ? `${className}` : ""}>
            {label && <label className={style.label}>{label}</label>}
            <input
                disabled={disabled}
                checked={type === 'checkbox' ? checked : undefined}
                name={name}
                type={type}
                placeholder={placeholder}
                className={style.input}
                onChange={onChange}
                value={value}

            />
        </div>
    );
};

export default Input;