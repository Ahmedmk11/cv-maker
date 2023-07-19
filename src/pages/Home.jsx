import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/app.css'

function Home() {
    return (
        <>
            <Header isSelected={{isSelected1: true, isSelected2: false, isSelected3: false}} />
            <Footer />
        </>
    )
}

export default Home
