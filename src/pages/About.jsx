import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function About() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: false,
                }}
            />
            <div id="about-body">
                <h1>About Me</h1>
                <p>
                    Hi, I created this CV maker website as a way to practice
                    using React. I&apos;m passionate about web development and
                    enjoy learning new technologies and frameworks.
                </p>
                <h2>My Website</h2>
                <p>
                    This website is a simple and user-friendly platform for
                    creating professional and effective CVs. It provides a range
                    of customization options to help you create a CV that stands
                    out from the crowd.
                </p>
                <h2>Why Use My Website?</h2>
                <ul>
                    <li>
                        Easy to use: The website is intuitive and easy to use,
                        even for people with no design experience.
                    </li>
                    <li>
                        Customizable: The website offers a wide range of
                        customization options to help you create a CV that
                        reflects your unique style and personality.
                    </li>
                    <li>
                        Professional: The CV templates are designed to ensure
                        that your CV looks polished and professional.
                    </li>
                    <li>
                        Free: The website is completely free to use, with no
                        hidden fees or charges.
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default About
