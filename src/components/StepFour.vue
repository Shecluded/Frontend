<template>
  <div class="step-four flex-column align-items-center mt-4">
    <h1>Card Verification</h1>
    <p class="about-you">How do you currently make money?</p>
    <h1 class="pt-3">Great! Add your Card Details.</h1>
    <p class="text-center ts">
      To validate your card, a non - refundable charge of N100
      needs to be processed to verify your card.
    </p>
    <p class="issues-text ts py-4">
      Having issues adding your card? please
      <router-link to="/contact">contact us</router-link>&nbsp; right away
    </p>
    <button class="add-card-btn mb-4">Add Card</button>
    <img src="@/assets/images/paystack.svg" alt />
  </div>
</template>

<script>
export default {};
</script>

<style>
.step-four {
  width: 40%;
}
.step-four h1:first-child {
  color: #fc559b;
  font-size: 35px;
  font-weight: bold;
}
.step-four .ts {
  font-weight: 100;
  font-size: 18px;
}
.step-four a {
  color: #ced0c5;
  text-decoration: none;
}
.add-card-btn {
  background: #fc559b;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
  width: 18vw;
  height: 7vh;
  font-weight: 100;
  font-size: 12px;
}
</style>