import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';

function Support() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const sendMail = async (t, e, m) => {
        let msg = {
            topic: t,
            email: e,
            message: m,
        }
        let msgStr = await JSON.stringify(msg)
        let response = await fetch('', {
            method: `POST`,
            headers: { 'Content-Type': 'application/json' },
            body: msgStr,
        })
        return response.body
    }

    const submitSupport = () => {
        const topic = document.getElementById('support-topic');
        const email = document.getElementById('support-email');
        const message = document.getElementById('support-message');
        if (topic.reportValidity() && email.reportValidity() && message.reportValidity()) {
            sendMail(topic.value, email.value, message.value);
            document.getElementsByClassName('form')[0].submit();
            document.getElementById('support-topic').selectedIndex = 0;
            document.getElementById('support-email').value = '';
            document.getElementById('support-message').value = '';
            return
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
                        <select id="support-topic" required>
                            <option value="" disabled selected>--Please choose an option--</option>
                            <option value="suggestion">Suggestion</option>
                            <option value="technical">Technical Problem</option>
                            <option value="general">General</option>
                        </select>
                        <br />
                        <label htmlFor="support-email">Email</label>
                        <input
                            id="support-email"
                            type="email"
                            name="email"
                            placeholder="johnsmith@email.com"
                            required
                        />
                        <br />
                        <label htmlFor="support-message">Message</label>
                        <textarea id="support-message" placeholder='Your message here..' required></textarea>
                        <br />
                    </form>
                </div>
                <Button name="Send" isSubmit={true} click={submitSupport} />
            </div>
            <Footer />
        </>
    );
}

export default Support;
