/* eslint-disable no-undef */
var express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
var app = express()
let port = process.env.PORT || 8080

app.use(
    cors({
        origin: '*',
    })
)

app.use(bodyParser.json())

app.post('/support', (req, res) => {
    let messageTitle = req.body.topic
    let messageEmail = req.body.email
    let messageBody = req.body.message
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'resumiomail@gmail.com',
            pass: process.env.pass,
        },
    })

    var mailOptions = {
        from: 'resumiomail@gmail.com',
        to: 'resumiomail@gmail.com',
        subject: messageTitle,
        html: `
        <!DOCTYPE html>
        <html lang="en" style="padding: 40px; width: 100%;">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email</title>
            </head>
            <body style="color: #1e4b70; background-color: #f4f7f8 !important; padding: 20px; width: 95%; margin: auto;">
                <h3>Email: ${messageEmail}</h3>
                <p>${messageBody}</p>
            </body>
                <footer style="margin-top: 50px; width: 100%; height:fit-content ; display: flex; justify-content: center; align-items: center;">
                    <p style="margin: 0%; font-weight: 600; font-size: medium;text-align: center;">
                        Resumio © 2023 All Rights Reserved.
                    </p>
                </footer>
            </body>
        </html>
        `,
    }

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error)
            res.status(500).send('An error occurred while sending the email')
        } else {
            console.log('Email sent <3')
            res.send('Email sent successfully')
        }
    })
})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`server running on port ${port}`)
})