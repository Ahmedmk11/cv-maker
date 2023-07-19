import React from 'react'
import '../styles/components.css'
import UlLink from './Link.jsx';

function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <h1>Resumio</h1>
                </div>
                <div>
                    <ul>
                        <UlLink page={'Home'} isSelected={false} />
                        <UlLink page={'Create CV'} isSelected={false} />
                        <UlLink page={'Templates'} isSelected={false} />
                        <UlLink page={'Support'} isSelected={false} />
                        <UlLink page={'Terms'} isSelected={false} />
                        <UlLink page={'About'} isSelected={false} />
                    </ul>
                </div>
            </div>
            <div>
                <p>
                    <strong>Made by </strong>
                    <a href="https://github.com/Ahmedmk11" target="_blank" rel="noreferrer">Ahmed Mahmoud</a>
                </p>
                <p>Copyright © 
                    <span id="starting-year"> 2023</span>
                    <span id="current-year"></span>
                    <span>. All rights reserved.</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
