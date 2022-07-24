const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
           // Пожалуйста, используйте свой собственный аккаунт для рассылки
            user: 'testmailer03@mail.ru', // (замените звездочики на название вашего почтового ящика)
            pass: 'q8nj8aiFBkHrtzjwJVwv' //  (замените звездочики на пароль вашего почтового ящика)
        }
    },
    {
        from: 'Mailer Test <testmailer03@mail.ru>',
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer