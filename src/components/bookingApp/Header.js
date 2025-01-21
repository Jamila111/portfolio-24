import React from 'react';

const Header = (props) => {



    return (
        <div>
            <h1 className='App-name'>{props.appName}</h1>
        </div>
    );
};

export default Header;