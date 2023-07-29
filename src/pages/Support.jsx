import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';

function Support() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const submitSupport = () => {
        const topic = document.getElementById('support-topic').value;
        const message = document.getElementById('support-message').value;
        if (topic === '' || message === '') {
            alert('Please fill in all fields');
        } else {
            alert('Thank you for your message. We will get back to you shortly.');
            document.getElementById('support-topic').selectedIndex = 0;
            document.getElementById('support-message').value = '';
        }
    }

    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: false,
                }}
            />
            <div id="support-body">
                <div id="support-item">
                    <h1>Support</h1>
                    <p>Welcome to our support page. How can we help you?</p>
                    <form className='form'>
                        <label htmlFor="support-topic">Topic:</label>
                        <select id="support-topic">
                            <option value="" disabled selected>--Please choose an option--</option>
                            <option value="suggestion">Suggestion</option>
                            <option value="technical">Technical Problem</option>
                            <option value="general">General</option>
                        </select>
                        <br />
                        <label htmlFor="support-message">Message:</label>
                        <textarea id="support-message" placeholder='Your message here..'></textarea>
                        <br />
                    </form>
                </div>
                <Button name="Send" click={submitSupport} />
            </div>
            <Footer />
        </>
    );
}

export default Support;
