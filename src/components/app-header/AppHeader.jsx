import React from 'react';
import AppMenuButton from './AppMenuButton';
import eagleLogoWhite from '../images/eagle-logo-white.png';

const AppHeader = (props) => {
    return (
        <header className="App-header row theme-bg-color-black">
            <div className='col-3'>
                <div className='header-logo-wrapper col-centered'>
                    <img className='App-logo' src={eagleLogoWhite} alt='eagle-logo-white' />
                </div>
            </div>
            <div className='col-6'>
                <div className="app-title-wrapper d-flex align-items-center">
                    <h2 className="app-title theme-color-white">chirper</h2>
                </div>
            </div>
            <div className='col-3'>
                <AppMenuButton />
            </div>
        </header>
    );
}

export default AppHeader;