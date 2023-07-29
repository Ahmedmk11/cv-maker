import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function PageNotFound() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: false,
                }}
            />
            <div id="notfound-body">
                <h1>404 Page Not Found</h1>
                <p>Sorry, the page you are looking for could not be found.</p>
            </div>
            <Footer />
        </>
    );
}

export default PageNotFound;
