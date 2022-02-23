import { stat } from 'fs';
import paper from '../../images/paper.png'
import rock from '../../images/rock.png';
import scissor from '../../images/scissor.png';

export const getImage = (choice: string) => {
    if (choice === 'paper') {
        return paper
    };
    
    if (choice === 'rock') {
        return rock
    };

    if (choice === 'scissor') {
        return scissor
    };

    return '';
}

export const startGame = (choice: string, setResult: any, setCPUMove: any) => {
    const CPUChoices = ['paper', 'rock', 'scissor'];
    const random = Math.floor(Math.random() * CPUChoices.length);
    const CPUMove = setCPUMove(CPUChoices[random]);

    if (choice === CPUMove) {
        return setResult("Empatou!");
    };

    if (choice === 'paper') {
        switch(CPUMove) {
            case 'rock':
                setResult("Você venceu!");
                break;
            default:
                setResult("Você perdeu!");
                break;
        };
    };

    if (choice === 'rock') {
        switch(CPUMove) {
            case 'scissor':
                setResult("Você venceu!");
                break;
            default:
                setResult("Você perdeu!");
                break;
        };
    };

    if (choice === 'scissor') {
        switch(CPUMove) {
            case 'paper':
                setResult("Você venceu!");
                break;
            default:
                setResult("Você perdeu!");
                break;
        };
    };
};
