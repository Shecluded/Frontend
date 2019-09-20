<template>
  <div class="verify flex">
    <div class="verify-area flex-column w-50 h-100">
      <h1 class="verify-text">Verify your phone number</h1>
      <p class="verify-text-two pt-4">Please enter the verification code sent to you.</p>
      <input autocomplete="off" type="number" class="verify-input" placeholder="Verification Code" />
      <button type="text" class="verify-button mt-3">Register</button>
      <p class="text-center pt-3 mb-2">
        Didn’t get a code?
        <router-link to="/">Send again</router-link>
      </p>
      <span
        class="policy-text text-center"
      >By clicking on Sign up, you agree to our terms & conditions and privacy policy</span>
    </div>
    <div class="verify-logo flex-center">
      <img src="@/assets/images/verify.svg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.verify {
  width: 100vw;
  height: 90vh;
}
.verify-logo {
  height: 90vh;
  width: 50%;
}
.verify-area {
  padding-left: 6vw;
  padding-right: 3vw;
}
.verify-text {
  font-weight: bold;
  font-size: 32px;
  color: #141414;
}
.verify-text-two {
  font-size: 14px;
  font-weight: 100;
}
.verify-input {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
}
.verify-input::placeholder {
  font-size: 12px;
  font-weight: 100;
}
.verify-input:focus {
  border: 0.75px solid #f740ac;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.verify-button {
  background: #f740ac;
  border-radius: 4px;
  height: 7vh;
  color: white;
  outline: none;
  font-size: 13px;
  font-weight: 300;
}
.verify a {
  color: #f740ac;
  text-decoration: none;
}
</style>
