import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Terms() {
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
            <div id="terms-body">
                <h1>Terms and Conditions</h1>
                <p>
                    Welcome to my open-source and free-to-use CV maker website. These terms and conditions outline the rules and regulations for the use of my website.
                </p>
                <h2>Introduction</h2>
                <p>
                    By accessing this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use my website.
                </p>
                <h2>License to use website</h2>
                <p>
                    This website is open-source and free-to-use. You are granted a license to use, modify, and distribute the source code of this website in accordance with the terms of the open-source license under which it is released.
                </p>
                <p>You must not:</p>
                <ul>
                    <li>use this website in any way that is unlawful, illegal, fraudulent or harmful;</li>
                    <li>use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
                    <li>conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without my express written consent;</li>
                    <li>use data collected from this website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing).</li>
                </ul>
                <h2>Your content</h2>
                <p>In these terms and conditions, “your content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to my website for whatever purpose.</p>
                <p>You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your content in any existing or future media. You also grant to us the right to sub-license these rights and the right to bring an action for infringement of these rights.</p>
                <p>Your content must not be illegal or unlawful, must not infringe any third party&apos;s legal rights and must not be capable of giving rise to legal action whether against you or us or a third party (in each case under any applicable law).</p>
            </div>
            <Footer />
        </>
    );
}

export default Terms;
