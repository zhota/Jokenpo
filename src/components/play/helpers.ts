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
