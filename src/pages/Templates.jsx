import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Templates() {
    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: true,
                }}
            />
            <div id='home-body'>
                Hi
            </div>
            <Footer />
        </>
    )
}

export default Templates
