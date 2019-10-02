const functions = require('firebase-functions')

const admin = require('firebase-admin');

const crypto = require('crypto')

admin.initializeApp();

//SendGrid Config
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template

sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendEmail = functions.https.onCall(async (context) => {

  if(!context.auth && !context.auth.token.email) {
    throw new functions.https.HttpsError('failed-precondition', 'Must be logged in with email address');
  }

  const email = context.auth.token.email;
  const apiKey = process.env.VUE_APP_FIREBASE_API_KEY;
  const obCode = crypto.randomBytes(10).toString('hex')

  const verifylink = await admin.auth().generateEmailVerificationLink(email, {
    url:`https://shecluded.firebaseapp.com/usermgmt?mode=verifyEmail&oobCode=${obCode}&apiKey=${apiKey}`

  })

    const msg = {
      to: email,
      from: 'hello@shecluded.com',
      templateId: TEMPLATE_ID,
      subject: 'Welcome to Shecluded',
      link:verifylink,
      dynamic_template_data: {
        name: user.lastName,
        subject: 'Welcome to Shecluded',
        link:verifylink
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