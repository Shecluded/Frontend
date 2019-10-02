<template>
  <div class="alert-area flex-center">
    <div class="alert-container flex-column align-items-center">
      <h2 class="text-center pb-5">Your phone number has been verified</h2>
      <div id="recaptcha-container"></div>
      <img src="@/assets/images/ok.svg" alt />
      <p class="text-center pt-5">
        We have sent you an email.
        <br />Please click on the verification link
        <br />in the email to confirm your registration.
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase"

export default {
  data() {
    return {
      mobileNumber: null,
      recaptchaVerifier: null
    };
  },
  watch: {
    mobileNumber(x) {
      if (x !== null) {
        this.getAuthCode();
      }
    }
  },
  methods: {
    getAuthCode() {
      var phoneNumber = this.mobileNumber;
      var appVerifier = this.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          console.log(confirmationResult.verificationId);
        })
        .catch(function(error) {
          console.log("sms not send");
        });
    }
  },

  mounted() {
    firebase.auth().languageCode = "it";
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function(response) {
          console.log(response);
        }
      }
    );
  }
};
</script>

<style  scoped>
.alert-area {
  width: 100vw;
  height: 90vh;
}
.alert-container {
  width: 30vw;
}
.alert-area p {
  font-size: 18px;
}
</style>