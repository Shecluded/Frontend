const functions = require('firebase-functions')

const admin = require('firebase-admin')

admin.initializeApp();

//SendGrid Config
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template

sgMail.setApiKey(SENDGRID_API_KEY);

exports.createWelcomeEmail = functions.auth.user().onCreate(async user => {

  const email = user.email;

  const msg = {
    to: email,
    from: 'hello@shecluded.com',
    subject: 'Welcome to Shecluded',
    templateId: TEMPLATE_ID,
    substitutions: {
      name: user.lastName
    }
  };

  return new Promise((resolve, reject) => {
    sgMail.send(msg, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
        console.log(msg)
        console.log(body)
      }
    });
  });
})