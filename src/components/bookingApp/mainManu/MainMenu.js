import React from 'react';

const MainMenu = ({appMenu}) => {


    return (
        <div className="mainMenu" >
            {appMenu.map(item => <li>{item}</li>)}
        </div>
    );
};

export default MainMenu;