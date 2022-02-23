import React from 'react';
import { Link } from 'react-router-dom';

const HowToPlay = () => {
    return (
        <div className="how-to-play">
            <h2>Como jogar?</h2>
            <p>Regras básicas: <br /> Pedra ganha de Tesoura <br /> Tesoura ganha de Papel <br /> Papel ganha de Pedra </p>
            <Link to="/">Voltar ao início</Link>
        </div>
    )
}

export default HowToPlay;
