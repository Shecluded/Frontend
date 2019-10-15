<template>
  <div class="step-three flex-column align-items-center mt-4">
    <h1 class="mb-0 mt-2 text-center">Your Financial goals</h1>
    <p class="about-you text-center">
      We would love to learn about your goals so we can help
      <br />you reach them
    </p>
    <input
      type="text"
      class="input-area mt-5"
      placeholder="How much would you like to make each month?"
      v-model="goal"
    />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  // watch: {
  //   "$store.state.Data": {
  //     handler(x) {
  //       let checkFirst = {
  //         goal: this.$store.state.Data.goal
  //       };
  //       var exists = Object.keys(checkFirst).some(k => {
  //         return checkFirst[k] === "" || checkFirst[k] === null;
  //       });
  //       this.$emit("next", exists);
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  computed: {
    ...mapFields(["Data.goal"])
  }
};
</script>

<style>
.step-three {
  width: 40%;
}
.step-three h1 {
  color: #fc559b;
  font-size: 35px;
  font-weight: bold;
}
.step-three .input-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
  font-size: 14px;
}
.step-three .input-area::placeholder {
  font-size: 14px;
  font-weight: 100;
}
</style>