<template>
  <div class="welcome flex-column align-items-center">
    <img src="@/assets/images/Woman.svg" alt />
    <h2 class="text-center pt-4 welcome-text">Welcome to Schecluded Bisola</h2>
    <p class="text-center welcome-text-two pt-1">
      Before you can apply for loans we need to know a little bit more
      <br />about you. Kindly take your time to fill the form on the next page.
    </p>
    <button type="text" class="welcome-button mt-3">Continue</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.welcome {
  height: 90vh;
}
.welcome-text {
  font-size: 38px;
}
.welcome-text-two {
  color: #505050;
  font-weight: 300;
  font-size: 22px;
}
.welcome-button {
  background: #f740ac;
  border-radius: 4px;
  width: 15vw;
  height: 7vh;
  color: white;
  outline: none;
  font-size: 20px;
  font-weight: 300;
}
</style>