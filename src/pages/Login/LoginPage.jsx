import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo'
import { ROUTES } from '../../constants/routes.constants';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        alert('Login bem-sucedido!');
        navigate('/');
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        alert('Registro bem-sucedido! Agora você pode fazer login.');
        setIsLogin(true);
    }

    const toggleMode = () => setIsLogin(!isLogin);

    return (
        <div className={style.loginPage}>
            <div className={`${style.loginContainer} ${isLogin ? '' : style.activeRegister}`}>
                <div className={style.loginGrid}>
                    <span className='material-symbols-rounded'>login</span>
                    <h1 className={style.loginTitle}>Login</h1>
                    <form className={style.loginForm} onSubmit={handleLogin}>
                        <div className={style.inputBox}>
                            <Input
                                id="loginEmail"
                                placeholder="Email"
                                type="email"
                                value={loginEmail}
                                onChange={(event) => setLoginEmail(event.target.value)} required
                            />
                        </div>

                        <div className={style.inputBox}>
                            <Input
                                id="loginPassword"
                                placeholder="Senha"
                                type="password"
                                value={loginPassword}
                                onChange={(event) => setLoginPassword(event.target.value)} required
                            />
                        </div>
                        <Button type="submit" className={style.button}>Entrar</Button>
                        <Link className={style.esqueceuSenha} to={ROUTES.ESQUECEU_SENHA}>Esqueceu a senha?</Link>
                    </form>
                </div>

                <div className={style.registerGrid}>
                    <span className='material-symbols-rounded'>person_add</span>
                    <h1 className={style.registerTitle}>Register</h1>
                    <form className={style.registerForm} onSubmit={handleRegister}>
                        <div className={style.inputBox}>
                            <Input
                                id="registerName"
                                placeholder="Name"
                                type="text"
                                value={registerName}
                                onChange={(event) => setRegisterName(event.target.value)} required
                            />
                        </div>

                        <div className={style.inputBox}>
                            <Input
                                id="registerEmail"
                                placeholder="Email"
                                type="email"
                                value={registerEmail}
                                onChange={(event) => setRegisterEmail(event.target.value)} required
                            />
                        </div>

                        <div className={style.inputBox}>
                            <Input
                                id="registerPassword"
                                placeholder="Senha"
                                type="password"
                                value={registerPassword}
                                onChange={(event) => setRegisterPassword(event.target.value)} required
                            />
                        </div>
                        <Button type="submit" className={style.button}>Registrar-se</Button>
                    </form>
                </div>

                <div className={`${style.dividerContainer} ${isLogin ? style.toRight : style.toLeft}`}>
                    <div className={style.dividerContent}>
                        <Logo size={120} color="#ffffff" />
                        <h2>PROSPERUM</h2>
                        {isLogin ? (    
                            <p>Não tem uma conta? <a onClick={toggleMode}>Registre-se!</a></p>
                        ) : (
                            <p>Já tem uma conta? <a onClick={toggleMode}>Entre!</a></p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;