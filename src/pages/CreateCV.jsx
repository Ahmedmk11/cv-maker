import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CCVPersonal from '../components/CCVPersonal.jsx';
import CCVExperience from '../components/CCVExperience.jsx';
import CCVTemplate from '../components/CCVTemplate.jsx';
import Button from '../components/Button.jsx';
import backPicAct from '../assets/images/icons/back.svg';
import backPicDeAct from '../assets/images/icons/backGray.svg';

function CreateCV() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0) {
            document.getElementById('back-btn').src = backPicDeAct;
            document.getElementById('back-btn').classList.add('no-hover')
        } else if (count === 1) {
            document.getElementById('back-btn').src = backPicAct;
            document.getElementById('back-btn').classList.remove('no-hover')
            Array.from(document.getElementsByClassName('next-button'))[0].textContent = 'Next Step';
        } else if (count === 2) {
            Array.from(document.getElementsByClassName('next-button'))[0].textContent = 'Finish';
        }
    }, [count]);

    const nextClick = () => {
        if (count === 0) {
            setCount(count + 1);
        } else if (count === 1) {
            setCount(count + 1);
        }
    };

    const prevClick = () => {
        if (count === 2) {
            setCount(count - 1);
        } else if (count === 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: true,
                    isSelected3: false,
                }}
            />
            <img id="back-btn" src={backPicDeAct} alt="Back button for the form" onClick={prevClick} />
            <div id="createcv-body">
                <Routes>
                    <Route path="/CreateCV/Personal-Details" element={<CCVPersonal />} />
                    <Route path="/CreateCV/Experience-&-Education" element={<CCVExperience />} />
                    <Route path="/CreateCV/Template" element={<CCVTemplate />} />
                </Routes>
                <Button id="next-btn" name={'Next Step'} classN={'next-button'} onClick={nextClick} />
            </div>
            <Footer />
        </>
    );
}

export default CreateCV;
