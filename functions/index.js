const functions = require('firebase-functions')

const admin = require('firebase-admin');

const crypto = require('crypto');

const firebaseHelper = require('firebase-functions-helper');

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const Nexmo = require("nexmo");

admin.initializeApp();

//nexmo config
const nexmo = new Nexmo({
  apiKey: "fcee7118",
  apiSecret: "NSCJfwzCP4FoYczc"
});

const db = admin.firestore();

const app = express();
const main = express();

const usersCollection = 'users';

main.use(cors());
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.use('/api/v1', app);



//SendGrid Config
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template

sgMail.setApiKey(SENDGRID_API_KEY);

//Email Verfication Function
exports.sendEmail = functions.https.onCall(async (data, context) => {

  return await admin.auth().getUser(context.auth.id)
    .then(userRecord => {
      const email = userRecord.email
      console.log(email)

      const apiKey = process.env.VUE_APP_FIREBASE_API_KEY;
      const obCode = crypto.randomBytes(10).toString('hex')

      const verifylink = admin.auth().generateEmailVerificationLink(email, {
        url:`https://shecluded.firebaseapp.com/usermgmt?mode=verifyEmail&oobCode=${obCode}&apiKey=${apiKey}`

      })

    const msg = {
      to: email,
      from: 'hello@shecluded.com',
      templateId: TEMPLATE_ID,
      subject: 'Welcome to Shecluded',
      link:verifylink,
      dynamic_template_data: {
        name: user.lastName,
        subject: 'Welcome to Shecluded',
        link:verifylink
      }
    };
    return new Promise((resolve, reject) => {
      sgMail.send(msg, (error, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
          console.log(msg)
          console.log(body)
        }
      });
    });

    })
  
  
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

// add user with bio-data
app.post(`/users/:userId/biodata`, async (req, res) => {

  try {
    const biodata = Biodata = {
      DOB: req.body["DOB"],
      LGA: req.body["LGA"],
      description: req.body["description"],
      state: req.body["state"],
      street: req.body["street"]
    };

    const newDoc = await firebaseHelper.firestore.createDocumentWithID(
      db,
      usersCollection,
      'FcG5P8lh2rTHw4UXYAqE',
      biodata
    );
    res.status(201).send(`New biodata created: ${newDoc.data}`);
  } catch (error) {
    res.status(400).send(console.log(error));
  }
});

//get a biodata
app.get('/biodata/:bioId', (req, res) => {

  firebaseHelper.firestore
    .getDocument(db, bioCollection, req.params.bioId)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(`Cannot get user : ${error}`))
})

//start Verification
app.post("/request", (req, res) => {
  // A user registers with a mobile phone number
  let phoneNumber = req.body.number;

  nexmo.verify.request(
    { number: phoneNumber, brand: "Shecluded" },
    (err, result) => {
      if (err) {
        console.log(err);

        //Oops! Something went wrong, respond with 500: Server Error
        res.status(500).send(err);
      } else {
        console.log(result);

        if (result && result.status == "0") {
          //A status of 0 means success! Respond with 200: OK
          res.status(200).send(result);
        } else {
          //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
          //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
          res.status(400).send(result);
        }
      }
    }
  );
});

app.post("/check", (req, res) => {
  //To verify the phone number the request ID and code are required.
  let code = req.body.code;
  let requestId = req.body.requestId;

  console.log("Code: " + code + " Request ID: " + requestId);

  nexmo.verify.check({ request_id: requestId, code: code }, (err, result) => {
    if (err) {
      console.log(err);

      //Oops! Something went wrong, respond with 500: Server Error
      res.status(500).send(err);
    } else {
      console.log(result);

      if (result && result.status == "0") {
        //A status of 0 means success! Respond with 200: OK
        res.status(200).send(result);
        console.log("Account verified!");
      } else {
        //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
        //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
        res.status(400).send(result);
        console.log("Error verifying account");
      }
    }
  });
});