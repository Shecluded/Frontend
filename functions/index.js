const functions = require('firebase-functions')

const admin = require('firebase-admin');

const crypto = require('crypto');

const firebaseHelper = require('firebase-functions-helper');

const express = require('express');

const bodyParser = require('body-parser');

admin.initializeApp();

const db = admin.firestore();

const app = express();
const main = express();

const usersCollection = 'users';

const bioCollection = 'biodatas'

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));



//SendGrid Config
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template

sgMail.setApiKey(SENDGRID_API_KEY);

//Email Verfication Function
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
  });

// Bio Data Function 
exports.webApi = functions.https.onRequest(main);

// Get one user
app.get('/users/:userId', (req, res) => {

  firebaseHelper.firestore
    .getDocument(db, usersCollection, req.params.userId)
    .then(doc => res.status(200).send(doc))
    .catch(error => res.status(400).send(`Cannot get user : ${error}`))
})

//Get all users
app.get('/users', (req, res) => {
  firebaseHelper.firestore
    .backup(db, usersCollection)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(`Cannot get users : ${error}`))
})

//Get all bio-data
app.get('/biodata', (req, res) => {
  
  firebaseHelper.firestore
    .backup(db, bioCollection)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(`Cannot get biodata : ${error}`))
})

//Get a bio-data
app.get('/biodata/:bioId', (req, res) => {
  
  firebaseHelper.firestore
    .getDocument(db, bioCollection, req.params.bioId)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(`Cannot get a user biodata: ${err}`))
})

app.get(`/biodata/${userId}`, (req, res) => {

  firebaseHelper.firestore
    .backup(db, bioCollection)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(`Cannot get biodata : ${error}`))

})
db.collection('users').doc(this.username).collection('booksList').add({   password: this.password,   name: this.name,   rollno: this.rollno })

// add biodata 
app.post('/user', async (req, res) => {
  const userId = db.collection('users').doc(user.id)
  try {
    const biodata = Biodata = {
      DOB: req.body['DOB'],
      LGA: req.body['LGA'],
      description: req.body['description'],
      state: req.body['state'],
      street: req.body['street']
    }

    const newDoc = await firebaseHelper.firestore
      .createNewDocument(db, userCollection, biodata);
      res.status(201).send(`New biodata created: ${newDoc}`)
  } catch(error) {
      res.status(400).send(`Something went wrong!`)
  }
})

