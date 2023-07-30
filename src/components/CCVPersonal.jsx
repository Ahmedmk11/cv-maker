import React from 'react'
import { useState, useLayoutEffect, useRef } from 'react'
import Progress from '../components/Progress.jsx'
import Button from '../components/Button.jsx'
import { useForm } from 'react-hook-form'

function CCVPersonal() {
    const { handleSubmit, reset } = useForm()
    const [personalData, setPersonalData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        linkedin: '',
        website: '',
    })

    const scrollY = useRef(window.scrollY)

    useLayoutEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, scrollY.current)
    })

    function handleChange(event) {
        event.target.setCustomValidity('')
        const { name, value } = event.target
        setPersonalData({ ...personalData, [name]: value })
    }

    function savePersonal() {
        console.log('submitted')
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit(savePersonal)}>
                    <legend className="first-legend">
                        <span className="number">1</span> Personal Info
                        <hr />
                    </legend>
                    <fieldset>
                        <label htmlFor="fname">First Name</label>
                        <input
                            id="fname"
                            type="text"
                            name="fname"
                            placeholder="John"
                            required
                            value={personalData.fname}
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            onChange={handleChange}
                        />
                        <label htmlFor="lname">Last Name</label>
                        <input
                            id="lname"
                            type="text"
                            name="lname"
                            placeholder="Smith"
                            required
                            value={personalData.lname}
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="johnsmith@email.com"
                            required
                            value={personalData.email}
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid email, e.g. email@email.com'
                                )
                            }
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
                            onChange={handleChange}
                        />
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="(555) 555-5555"
                            required
                            value={personalData.phone}
                            onChange={handleChange}
                        />
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder="Cairo"
                            required
                            value={personalData.city}
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid city name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            onChange={handleChange}
                        />
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            type="text"
                            name="country"
                            placeholder="Egypt"
                            required
                            value={personalData.country}
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid country name'
                                )
                            }
                            pattern="[A-Za-z]+"
                            onChange={handleChange}
                        />
                    </fieldset>
                    <legend>
                        <span className="number">2</span> Additional Info
                    </legend>
                    <fieldset>
                        <hr />
                        <label htmlFor="linkedin"></label>
                        <input
                            type="text"
                            name="linkedin"
                            id="linkedin"
                            placeholder="https://www.linkedin.com/in/user-id/"
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid url, e.g. https://www.linkedin.com/in/user-id/'
                                )
                            }
                            pattern="https?://(www\.)?linkedin\.com/.*"
                            onChange={handleChange}
                            value={personalData.linkedin}
                        />
                        <label htmlFor="website"></label>
                        <input
                            type="text"
                            name="website"
                            id="website"
                            placeholder="https://github.com/ahmedmk11"
                            onInvalid={(event) =>
                                event.target.setCustomValidity(
                                    'Must be a valid url, e.g. https://github.com/username'
                                )
                            }
                            pattern="https?://.+"
                            onChange={handleChange}
                            value={personalData.website}
                        />
                    </fieldset>
                    <Button classN="plus" name="Done" type="submit" />
                </form>
            </div>
        </>
    )
}

export default CCVPersonal
