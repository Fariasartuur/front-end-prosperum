import styles from './Dropdown.module.css';
import Button from './Button';
import { useState } from 'react';

const Dropdown = ({ children, placeHolder, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdown} onClick={toggleDropdown}>
            <Button className={className || styles.dropbtn}>
                {placeHolder}
                <span className="material-symbols-rounded">keyboard_arrow_down</span>
            </Button>
            {isOpen && (
                <div 
                    className={className ? `${styles.contentNew} ${className}` : styles.content} 
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            )}

        </div>
    );
};

export default Dropdown;