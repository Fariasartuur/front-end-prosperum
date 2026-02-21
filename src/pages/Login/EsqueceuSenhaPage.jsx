import Button from '../../components/Button';
import Input from '../../components/Input';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EsqueceuSenhaPage = () => {
    const [emailSent, setEmailSent] = useState(false);

    return (
        <>
            {emailSent 
                ? <MudarSenhaPage /> 
                : <ConfirmarEmailPage setEmailSent={setEmailSent} />
            }
        </>
    );
};

const ConfirmarEmailPage = ({ setEmailSent }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailSent(true);
    };

    return (
        <div className={style.loginPage}>
            <div className={style.forgotContainer}>
                <div className={style.backBtn} onClick={() => navigate('/login')}>
                    <span className='material-symbols-rounded'>arrow_back</span>
                </div>
                <span className='material-symbols-rounded' style={{fontSize: '48px'}}>lock_reset</span>
                <h1 className={style.loginTitle}>Esqueci minha senha</h1>
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <div className={style.inputBox}>
                        <Input
                            id="email"
                            placeholder="Digite seu email"
                            type="email"
                            required
                        />
                    </div>
                    <Button type="submit" className={style.button}>Enviar link de recuperação</Button>
                </form>
            </div>
        </div>
    );
};

const MudarSenhaPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Senha redefinida com sucesso!');
        navigate('/login');
    };

    return (
        <div className={style.loginPage}>
            <div className={style.forgotContainer}>
                <span className='material-symbols-rounded' style={{fontSize: '48px'}}>lock_reset</span>
                <h1 className={style.loginTitle}>Redefinir senha</h1>
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <div className={style.inputBox}>
                        <Input id="newPassword" placeholder="Nova senha" type="password" required />
                    </div>
                    <div className={style.inputBox}>
                        <Input id="confirmPassword" placeholder="Confirme a senha" type="password" required />
                    </div>
                    <Button type="submit" className={style.button}>Redefinir senha</Button>
                </form>
            </div>
        </div>
    );
};

export default EsqueceuSenhaPage;