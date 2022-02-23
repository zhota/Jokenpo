import React, { useState } from 'react';
import paper from '../../images/paper.png';
import rock from '../../images/rock.png';
import scissor from '../../images/scissor.png';
import { getImage } from './helpers';
import './styles.css';

const Play = () => {
    const [choice, setChoice] = useState('');
    console.log('choice do state', choice);

    const playerChoice = (choice: string) => {
        return setChoice(choice);
    }

    const startGame = (choice: string) => {
        const CPUChoices = ['paper', 'rock', 'scissor'];
        const random = Math.floor(Math.random() * CPUChoices.length);
        console.log('o robô escolheu', CPUChoices[random]);
        
        if (choice === CPUChoices[random]) {
            return console.log('Empatou!');
        };

        if (choice === 'paper') {
            switch(CPUChoices[random]) {
                case 'rock':
                    console.log('Você ganhou!');
                    break;
                default:
                    console.log('você perdeu!');
                    break;
            };
        };

        if (choice === 'rock') {
            switch(CPUChoices[random]) {
                case 'scissor':
                    console.log('Você ganhou!');
                    break;
                default:
                    console.log('você perdeu!');
                    break;
            };
        };

        if (choice === 'scissor') {
            switch(CPUChoices[random]) {
                case 'paper':
                    console.log('Você ganhou!');
                    break;
                default:
                    console.log('você perdeu!');
                    break;
            };
        };
    };
    
    return (
        <div className="play-area">
            <h2>Escolha sua jogada</h2>
            {choice && (
                <div className="choosed-wrapper">
                    <img src={getImage(choice)} className="choosed-play" alt={choice}/>
                    <div className="choosed-buttons-wrapper">
                        <button className="choosed-buttons" onClick={() => startGame(choice)}>Jogar!</button>
                        <button className="choosed-buttons" onClick={() => setChoice('')}>Trocar</button>
                    </div>
                </div>
            )}
            {!choice && (
                <div className="choosing-wrapper">
                    <img src={paper} className="play-buttons-choices" alt="paper" onClick={() => playerChoice("paper")}/>
                    <img src={rock} className="play-buttons-choices" alt="rock" onClick={() => playerChoice("rock")}/>
                    <img src={scissor} className="play-buttons-choices" alt="scissor" onClick={() => playerChoice("scissor")}/>
                </div>
            )}
        </div>
    );
};

export default Play;
