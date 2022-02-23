import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HowToPlay = () => {
    return (
        <div className="how-to-play">
            <h2>Como jogar?</h2>
            <h4>Regras básicas:</h4>
            <p>Pedra ganha de Tesoura <br /> Tesoura ganha de Papel <br /> Papel ganha de Pedra </p>
            <Link to="/">Voltar ao início</Link>
        </div>
    )
}

export default HowToPlay;
