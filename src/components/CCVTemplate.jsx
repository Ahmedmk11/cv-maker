import React, { useContext, useState, useLayoutEffect, useRef } from 'react';
import Progress from '../components/Progress.jsx'
import Button from '../components/Button.jsx'
import DataContext from '../components/DataContext.jsx'
import template1 from '../assets/images/templates/template-1.png'
import template2 from '../assets/images/templates/template-2.png'

function CCVTemplate() {
    const [button1, setButton1] = useState(<Button classN="plus" name='Choose' isSubmit={false} />)
    const [button2, setButton2] = useState(<Button classN="plus" name='Choose' isSubmit={false} />)
    const { template, setTemplate } = useContext(DataContext)

    const scrollY = useRef(window.scrollY);

    useLayoutEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, scrollY.current);
    });

    const chooseTemplate = (event) => {
        document.querySelectorAll('.temp-item').forEach(item => {
            item.classList.remove('selected-template');
            setButton1(<Button classN="plus" name='Choose' isSubmit={false} />);
            setButton2(<Button classN="plus" name='Choose' isSubmit={false} />);
        });
        let clicked = event.target;
        while (clicked && !clicked.classList.contains('temp-item')) {
            clicked = clicked.parentElement;
        }
        if (clicked) {
            clicked.classList.add('selected-template');
            if (clicked.firstChild.innerHTML === 'Template 1') {
                setButton1(<Button classN="tick" name='Selected' isSubmit={false} />);
                setTemplate('1');
            } else if (clicked.firstChild.innerHTML === 'Template 2') {
                setButton2(<Button classN="tick" name='Selected' isSubmit={false} />);
                setTemplate('2');
            }
        }
    }
    

    return (
        <>
            <Progress progress={'2'} />
            <h1>Templates</h1>
            <div id="templates">
                <div className="temp-item" onClick={chooseTemplate}>
                    <h3>Template 1</h3>
                    <div className="template-img-container">
                        <img className='template-img' src={template1} alt="Template 1" />
                        {button1}
                    </div>
                </div>
                <div className="temp-item" onClick={chooseTemplate}>
                    <h3>Template 2</h3>
                    <div className="template-img-container">
                        <img className='template-img' src={template2} alt="Template 2" />
                        {button2}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CCVTemplate
