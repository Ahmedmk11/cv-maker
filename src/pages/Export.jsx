import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Export(props) {
    const { personal, experience, template } = props
    const [format, setFormat] = useState('docx');

    const handleChange = (event) => {
        setFormat(event.target.value)
    }

    const checkValues = (obj) => {
        for (let key in obj) {
            if (obj[key] === '' && key !== 'linkedin' && key !== 'website') {
                return false;
            }
        }
        return true;
    }

    const exportCV = async () => {
        if (checkValues(personal) & template !== '') {
            const response = await fetch('https://resumio-server.onrender.com/export', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    personal: personal,
                    experience: experience,
                    template: template,
                    format: format,
                })
            })
            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = `${personal.fname}-${personal.fname}-resume.${format}`
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            } else {
                console.error('Error generating file')
            }
        } else {
            console.log('missing data')
        }
    }

    return (
        <>
            <Header
                isSelected={{
                    isSelected1: false,
                    isSelected2: false,
                    isSelected3: false,
                }}
            />
            <div id="export-body">
                <div id="export-container">
                    <div id="top">
                        <h3>Export Your CV</h3>
                        <p>Your CV has been generated successfully!</p>
                    </div>
                    <div id="bottom">
                        <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Format</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={format}
                                    label="Format"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'docx'}>Word Document</MenuItem>
                                    <MenuItem value={'pdf'}>PDF</MenuItem>
                                    <MenuItem value={'png'}>Image</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Button
                            name={'Export'}
                            classN={'default-button'}
                            click={exportCV}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

Export.propTypes = {
    personal: PropTypes.object,
    experience: PropTypes.object,
    template: PropTypes.string,
}

Export.defaultProps = {
    personal: {},
    experience: {},
    template: '1',
}

export default Export
