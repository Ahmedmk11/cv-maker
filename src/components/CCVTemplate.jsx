import React, { useEffect, useContext, useState, useLayoutEffect, useRef } from 'react'
import Button from '../components/Button.jsx'
import DataContext from '../components/DataContext.jsx'
import template1 from '../assets/images/templates/template-1.png'
import template2 from '../assets/images/templates/template-2.png'

function CCVTemplate() {
    const [button1, setButton1] = useState(
        <Button classN="plus" name="Choose" isSubmit={false} />
    )
    const [button2, setButton2] = useState(
        <Button classN="plus" name="Choose" isSubmit={false} />
    )
    const { template, setTemplate } = useContext(DataContext)

    const scrollY = useRef(window.scrollY)

    useLayoutEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, scrollY.current)
    })

    useEffect(() => {
        const chosenTemplate = localStorage.getItem('chosenTemplate')
        if (chosenTemplate) {
            setTemplate(chosenTemplate)
            if (chosenTemplate === '1') {
                setButton1(
                    <Button classN="tick" name="Selected" isSubmit={false} />
                )
                document.getElementById('temp-1').classList.add('selected-template')
            }
            if (chosenTemplate === '2') {
                setButton2(
                    <Button classN="tick" name="Selected" isSubmit={false} />
                )
                document.getElementById('temp-2').classList.add('selected-template')
            }
        }
    }, [setTemplate])

    const chooseTemplate = (event) => {
        document.querySelectorAll('.temp-item').forEach((item) => {
            item.classList.remove('selected-template')
            setButton1(<Button classN="plus" name="Choose" isSubmit={false} />)
            setButton2(<Button classN="plus" name="Choose" isSubmit={false} />)
        })
        let clicked = event.target
        while (clicked && !clicked.classList.contains('temp-item')) {
            clicked = clicked.parentElement
        }
        if (clicked) {
            clicked.classList.add('selected-template')
            if (clicked.firstChild.innerHTML === 'Template 1') {
                setButton1(
                    <Button classN="tick" name="Selected" isSubmit={false} />
                )
                setTemplate('1')
                localStorage.setItem('chosenTemplate', '1')
            } else if (clicked.firstChild.innerHTML === 'Template 2') {
                setButton2(
                    <Button classN="tick" name="Selected" isSubmit={false} />
                )
                setTemplate('2')
                localStorage.setItem('chosenTemplate', '2')
            }
        }
    }

    return (
        <>
            <div id="templates">
                <div id='temp-1' className="temp-item" onClick={chooseTemplate}>
                    <h3>Template 1</h3>
                    <div className="template-img-container">
                        <img
                            className="template-img"
                            src={template1}
                            alt="Template 1"
                        />
                        {button1}
                    </div>
                </div>
                <div id='temp-2' className="temp-item" onClick={chooseTemplate}>
                    <h3>Template 2</h3>
                    <div className="template-img-container">
                        <img
                            className="template-img"
                            src={template2}
                            alt="Template 2"
                        />
                        {button2}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CCVTemplate
