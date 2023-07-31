/* eslint-disable indent */
import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Export() {
    const [format, setFormat] = useState('docx');

    const handleChange = (event) => {
        setFormat(event.target.value)
    }

    const exportCV = () => {
        switch (format) {
            case 'docx':
                console.log('docx')
                break
            case 'pdf':
                console.log('pdf')
                break
            case 'png':
                console.log('png')
                break
            default:
                console.log('default')
                break
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

export default Export
