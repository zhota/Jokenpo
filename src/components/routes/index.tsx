import { Routes, Route } from 'react-router-dom';
import HowToPlay from '../how-to-play/index';
import Play from '../play/index';

const CustomRoutes = () => {
    return (
    <Routes>
        <Route path="jogar" element={<Play />}/>
        <Route path="como-jogar" element={<HowToPlay />} />
    </Routes>
    );
};

export default CustomRoutes;
