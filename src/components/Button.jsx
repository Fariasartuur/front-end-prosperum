import styles from "./Button.module.css";

const Button = ({ 
    children, 
    onClick, 
    className = "", 
    type = "button", 
    disabled,
    form
}) => {
    return (
        <button
            form={form}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className ? `${className}` : `${styles.button}`}
        >
            {children}
        </button>
    );
}

export default Button;