const functions = require('firebase-functions')

var admin = require('firebase-admin')

admin.initializeApp();

const mailgun = require('mailgun-js')({apiKey:'2bde729f9c6e073d81128c7eb0a46b6f-baa55c84-b0c77a6c', domain:'https://api.mailgun.net/v3/sandboxec33eaacb74e4f41a8985d9a8824c148.mailgun.org'})

exports.createWelcomeEmail = functions.auth.user().onCreate(async user => {
  const email = user.email;

  var msg = {
    from: 'noreply@shecluded.com',
    subject: 'Welcome!',
    html: `<p>Welcome! ${user.lastName}</p>`,
    'h:Reply-To': 'app@app.com',
    to: email
  }

  return await mailgun.messages().send(msg)
})