import React, { useEffect } from 'react';

import './DarkMode.css';



const DarkMode = () => {
    const handleToggled = () => {
        document.body.classList.toggle('dark');
        localStorage.setItem(
            'dark',
            document.body.className
        );
    };

    useEffect(() => {
        if (localStorage.getItem('dark')) {
            document.body.classList.add('dark');
        }
    }, []);
    

    return (
        <label>
            <input 
                type="checkbox"
                onClick={ handleToggled }
            />
            <span className='switch'>
                <span className='handle'></span>
            </span>
        </label>
    );
}

export default DarkMode;
