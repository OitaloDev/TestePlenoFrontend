import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    //Todo: Lógica de autenticação
    navigate("/home");
  };

  const onRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="login-logo">
        <h1>capys</h1>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teste@capys.com.br"
              required
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <button type="submit" className="entrar-button">
            Entrar
          </button>
        </form>
        <div className="footer">
          <p>Ainda não possui uma conta?</p>
          <button className="cadastrar-button" onClick={onRegister}>Cadastre-se</button>
        </div>
      </div >
    </>
  );
};

export default Login;
