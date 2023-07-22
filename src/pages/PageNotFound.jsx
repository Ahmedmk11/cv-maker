import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function PageNotFound() {
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
                NotFound
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound
