import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomRoutes from '../routes/index';
import './styles.css';

export const MenuChoices = () => {
    const navigate = useNavigate();

    const handleRoute = ( route: string ) => {
        return navigate(`/${route}`)
    }

    return (
        <div className="menu">
            <button className="play-button" onClick={() => handleRoute("jogar")}>Começar</button>
            <button className="how-to-play-button" onClick={() => handleRoute("como-jogar")}>Como jogar?</button>
            <CustomRoutes />
        </div>
    )
};

export default MenuChoices;
