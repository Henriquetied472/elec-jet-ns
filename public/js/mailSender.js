import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {

    user: 'elecjetent@gmail.com',
    pass: 'h3nr1qui'
    
    }

})

const getValue = () => {

    let fname = document.querySelector('#name').value
    let fmail = document.querySelector('#mail').value
    let fsubject = document.querySelector('#subject').value
    let fmessage = document.querySelector('#message').value
    let form = {

        name: fname,
        mail: fmail,
        subject: fsubject,
        message: fmessage

    }

    return form

}

/*const mailOpt = {

    from: 'elecjetent@gmail.com.com',
    to: 'hgoulart659@gmail.com',
    subject: 'Formulário de contato da ElecJetENS',
    text: `Nome: ${name}\nEmail: ${mail}\nAssunto: ${subject}\nMensagem: ${message}`

}*/
const send = () => {

    let values = getValue()

    console.log(`Nome: ${values.name}\nEmail: ${values.mail}\nAssunto: ${values.subject}\nMensagem: ${values.message}`)

}