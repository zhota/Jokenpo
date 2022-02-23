import React, { useState } from 'react';
import paper from '../../images/paper.png';
import rock from '../../images/rock.png';
import scissor from '../../images/scissor.png';
import { getImage, startGame } from './helpers';
import './styles.css';

const Play = () => {
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState('');
    const [CPUMove, setCPUMove] = useState('');
    console.log('result >>>', result);

    const playerChoice = (choice: string) => {
        return setChoice(choice);
    }

    console.log('result >>>', result);
    if (result) {
        return (
            <div className="play-area-result">
                <h2>{result}</h2>
                <div className="wrapper-result">
                    <div>
                        <h6>Sua jogada:</h6>
                        <img src={getImage(choice)} className="choosed-play" alt={choice}/>
                    </div>
                    <div>
                        x
                    </div>
                    <div>
                        <h6>O competidor usou:</h6>
                        <img src={getImage(CPUMove)} className="choosed-play" alt={CPUMove}/>
                    </div>
                </div>
                <a className="choosed-buttons" href="/jogar">Jogar novamente?</a>
            </div>
        );
    }
    
    return (
        <div className="play-area">
            <h2>Escolha sua jogada</h2>
            {choice && (
                <div className="choosed-wrapper">
                    <img src={getImage(choice)} className="choosed-play" alt={choice}/>
                    <div className="choosed-buttons-wrapper">
                        <button className="choosed-buttons" onClick={() => startGame(choice, setResult, setCPUMove)}>Jogar!</button>
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
