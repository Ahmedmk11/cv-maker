import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BounceLoader from 'react-spinners/BounceLoader'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'

function Support() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    const sendMail = async (t, e, m) => {
        let msg = {
            topic: t,
            email: e,
            message: m,
        }
        let msgStr = await JSON.stringify(msg)
        let response = await fetch(
            'https://resumio-server.onrender.com/support',
            {
                method: `POST`,
                headers: { 'Content-Type': 'application/json' },
                body: msgStr,
            }
        )
        return response.body
    }

    const submitSupport = (event) => {
        event.preventDefault()
        const topic = document.getElementById('support-topic')
        const email = document.getElementById('support-email')
        const message = document.getElementById('support-message')
        if (
            topic.reportValidity() &&
            email.reportValidity() &&
            message.reportValidity()
        ) {
            setLoading(true)
            sendMail(topic.value, email.value, message.value)
            setTimeout(() => {
                setLoading(false)
                navigate('/')
            }, 3000)
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
                {loading ? (
                    <div className="loader-container">
                        <div className="spinner">
                            <h1 className="grat">
                                Thank you for your message!
                            </h1>
                            <BounceLoader color={'#F4F7F8'} size={100} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div id="support-item">
                            <h1>Support</h1>
                            <p>
                                Welcome to our support page. How can we help
                                you?
                            </p>
                            <form className="form">
                                <label htmlFor="support-topic">Topic</label>
                                <select id="support-topic" required>
                                    <option value="" disabled selected>
                                        --Please choose an option--
                                    </option>
                                    <option value="Suggestion">
                                        Suggestion
                                    </option>
                                    <option value="Technical">
                                        Technical Problem
                                    </option>
                                    <option value="General">
                                        General Inquiry
                                    </option>
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
                                <textarea
                                    id="support-message"
                                    placeholder="Your message here.."
                                    required
                                ></textarea>
                                <br />
                            </form>
                        </div>
                        <Button
                            name="Send"
                            isSubmit={false}
                            click={submitSupport}
                        />
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Support
