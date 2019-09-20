<template>
  <div class="alert-area flex-center">
    <div class="alert-container flex-column align-items-center">
      <h2 class="text-center pb-5">Your phone number has been verified</h2>
      <img src="@/assets/images/ok.svg" alt />
      <p class="text-center pt-5">
        We have sent you an email.
        <br />Please click on the verification link
        <br />in the email to confirm your registration.
      </p>
    </div>
  </div>
</template>

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