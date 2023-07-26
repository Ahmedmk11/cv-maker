import React from 'react'
import Progress from '../components/Progress.jsx'

function CCVPersonal() {
    return (
        <>
            <Progress progress={'0'} />
            <h1>Personal Details</h1>
            <div className="form">
                <form>
                    <legend>
                        <span className="number">1</span> <sup>*</sup>Personal
                        Info
                    </legend>
                    <fieldset>
                        <label htmlFor="fname">First Name</label>
                        <input
                            id="fname"
                            type="text"
                            name="fname"
                            placeholder="John"
                        />
                        <label htmlFor="lname">Last Name</label>
                        <input
                            id="lname"
                            type="text"
                            name="lname"
                            placeholder="Smith"
                        />
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="johnsmith@email.com"
                        />
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="(555) 555-5555"
                        />
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder="Cairo"
                        />
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            type="text"
                            name="country"
                            placeholder="Egypt"
                        />
                    </fieldset>
                    <legend>
                        <span className="number">2</span> Additional Info
                    </legend>
                    <fieldset>
                        <label htmlFor="linkedIn"></label>
                        <input
                            type="text"
                            name="linkedIn"
                            id="linkedIn"
                            placeholder="https://www.linkedin.com/in/user-id/"
                        />
                        <label htmlFor="website"></label>
                        <input
                            type="text"
                            name="website"
                            id="website"
                            placeholder="https://github.com/ahmedmk11"
                        />
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default CCVPersonal
