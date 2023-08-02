/* eslint-disable no-undef */
var express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const { TemplateHandler } = require('easy-template-x')
var nodemailer = require('nodemailer')
var app = express()
let port = process.env.PORT || 8080

app.use(
    cors({
        origin: '*',
    })
)

app.use(bodyParser.json())

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const cleanData = (personalInfo, experienceInfo) => {
    const newPersonalInfo = {
        ...personalInfo,
        fname: capitalizeFirstLetter(personalInfo.fname),
        lname: capitalizeFirstLetter(personalInfo.lname),
        city: capitalizeFirstLetter(personalInfo.city),
        country: capitalizeFirstLetter(personalInfo.country),
    }
    const newExperienceInfo = {
        jobs:
            experienceInfo.jobs && experienceInfo.jobs.length > 0
                ? experienceInfo.jobs.map((job) => ({
                    ...job,
                    endDate: job.endDate
                        ? `${new Date(job.startDate).toLocaleString(
                            'default',
                            {
                                month: 'short',
                            }
                        )} ${new Date(
                            job.startDate
                        ).getFullYear()} - ${new Date(
                            job.endDate
                        ).toLocaleString('default', {
                            month: 'short',
                        })} ${new Date(job.endDate).getFullYear()}`
                        : `${new Date(job.startDate).toLocaleString(
                            'default',
                            {
                                month: 'short',
                            }
                        )} ${new Date(job.startDate).getFullYear()}`,
                    wcity: capitalizeFirstLetter(job.wcity),
                    wcountry: capitalizeFirstLetter(job.wcountry),
                }))
                : [],
        schools:
            experienceInfo.schools && experienceInfo.schools.length > 0
                ? experienceInfo.schools.map((school) => ({
                    ...school,
                    endDateSchool: `${new Date(
                        school.endDateSchool
                    ).toLocaleString('default', {
                        month: 'short',
                    })} ${new Date(school.endDateSchool).getFullYear()}`,
                    scity: capitalizeFirstLetter(school.scity),
                    scountry: capitalizeFirstLetter(school.scountry),
                }))
                : [],
        skills:
            experienceInfo.skills && experienceInfo.skills.length > 0
                ? experienceInfo.skills
                : [],
    }
    const data = {
        ...newPersonalInfo,
        jobs: newExperienceInfo.jobs,
        schools: newExperienceInfo.schools,
        ...newExperienceInfo.skills[0],
    }
    return data
}

app.post('/export', async (req, res) => {
    try {
        let personalInfo = req.body.personal
        let experienceInfo = req.body.experience
        let templateInfo = req.body.template
        let formatInfo = req.body.format

        const data = cleanData(personalInfo, experienceInfo)

        if (experienceInfo.skills.length === 0) {
            experienceInfo.jobs.forEach((job, index) => {
                for (let key in job) {
                    data[`${key}-${index}`] = job[key]
                }
            })
            experienceInfo.schools.forEach((school, index) => {
                for (let key in school) {
                    data[`${key}-${index}`] = school[key]
                }
            })
        }

        const template = new TemplateHandler()
        let templateFile = fs.readFileSync(
            `./src/assets/templates/template-${templateInfo}.docx`
        )

        const doc = await template.process(templateFile, data)
        let outputPath = `./src/assets/resumes/${personalInfo.fname}-${personalInfo.lname}-cv.${formatInfo}`
        fs.writeFileSync(outputPath, doc)
        res.download(outputPath)
    } catch (error) {
        console.log(error)
        res.status(500).send('An error occurred while exporting the resume')
    }
})

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
