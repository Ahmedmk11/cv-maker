import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import template1 from '../assets/images/templates/template-1.png'
import template2 from '../assets/images/templates/template-2.png'

function Templates() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: true,
                }}
            />
            <div id="templates-body">
                <h1>Templates</h1>
                <div id="templates-container">
                    <div className="temp-item">
                        <h3>
                            <a
                                target="_blank"
                                href="https://www.reddit.com/r/jobs/comments/7y8k6p/im_an_exrecruiter_for_some_of_the_top_companies/"
                                rel="noreferrer"
                            >
                                Template 1
                            </a>
                        </h3>
                        <img
                            className="template-img"
                            src={template1}
                            alt="Template 1"
                        />
                    </div>
                    <div className="temp-item">
                        <h3>
                            <a target="_blank" href="">
                                Template 2
                            </a>
                        </h3>
                        <img
                            className="template-img"
                            src={template2}
                            alt="Template 2"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Templates
