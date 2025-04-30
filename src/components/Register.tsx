import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.scss';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        bio: '',
        contact: '',
        position: 'Desenvolvedor Front-End'
    });

    const onBack = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('formulario', formData);
        //Todo: Lógica de submissão do formulário
    };

    return (
        <>
            <div className="logo">
                <h1>capys</h1>
                <button onClick={onBack}>voltar</button>
            </div>
            <div className="register-container">
                <h2>Crie sua conta</h2>
                <p>Rápido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Digite aqui seu nome"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite aqui seu email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            Senha
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite aqui sua senha"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Digite novamente sua senha"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            Bio
                        </label>
                        <input
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Fale sobre você"
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            Contato
                        </label>
                        <select
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                        >
                            <option value="">Opção de contato</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>
                            Selecionar Cargo
                        </label>
                        <select
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                        >
                            <option value="Desenvolvedor Front-End">Desenvolvedor Front-End</option>
                        </select>

                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    );
};

export default Register;