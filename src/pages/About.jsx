import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/app.css'

function About() {
    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: false,
                }}
            />
            <div id='home-body'>
                Hi
            </div>
            <Footer />
        </>
    )
}

export default About
