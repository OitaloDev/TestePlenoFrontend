import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const onBack = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">capys</h1>
        <button onClick={onBack}>Sair</button>
      </header>
      <main className="main">
        <h2 className='subtitle'>Olá, Teste Capys</h2>
        <p>Que pena! Estamos em desenvolvimento :(</p>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
      <footer className="footer">
        <p>Desenvolvedor Front-End</p>
      </footer>
    </div>
  );
};

export default Home;