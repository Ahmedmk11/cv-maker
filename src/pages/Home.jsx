import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import { Link } from 'react-router-dom'

function Home() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    const handleClick = () => {
        let coll = document.getElementsByTagName('a')
        let arr = Array.prototype.slice.call(coll, 0)
        arr.forEach((element) => {
            if (element.textContent === 'Create CV') {
                element.click()
                return
            }
        })
    }

    return (
        <>
            <Header
                isSelected={{
                    isSelected1: true,
                    isSelected2: false,
                    isSelected3: false,
                }}
            />
            <div id="home-body">
                <div id="home-body">
                    <div id="home-body-left">
                        <h3>In three simple steps</h3>
                        <ol>
                            <li>
                                <strong>Fill</strong> in your personal and professional information.
                            </li>
                            <li>
                                <strong>Choose</strong> any template you prefer.
                            </li>
                            <li>
                                <strong>Download</strong> it as a Word, PDF or a PNG &
                                share it!
                            </li>
                        </ol>
                    </div>
                    <div id="home-body-right">
                        <Button
                            name={'Start Creating Now!'}
                            classN={'default-button'}
                            click={handleClick}
                        />
                        <span>
                            By clicking &quot;Start Creating Now!&quot;, you
                            will begin creating your resume and you agree to our{' '}
                            <Link to={'/terms'} className="link">
                                Terms
                            </Link>
                            .
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
