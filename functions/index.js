//Firebase Config
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

//SendGrid Config
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(SENDGRID_API_KEY);

//Functions 
exports.createUserAndMetadata = functions.auth.user().onCreate(async user => {

    const userId = user.uid
    
    return db.collection('users').doc(userId)
      .get()
      .then(() => {
        const msg = {
          to: user.email,
          from: 'hello@shecluded.com',
          subject: 'Welcome to Shecluded',
          templateId: TEMPLATE_ID,
          substitutions: {
            name: user.lastName
          }
        };
        return sgMail.send(msg)
      })
      .then(()=> console.log('email sent'))
      .catch((err) => console.log(err))
  })
  
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
