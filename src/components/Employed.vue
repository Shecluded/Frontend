<template>
  <div class="employed mt-5">
    <input type="text" class="input-area" placeholder="Name of company you work at" name id />
    <input type="text" class="input-area mt-3" placeholder="Address" name id />
    <div class="grid-area mt-3">
      <input type="text" class="input-area" placeholder="Website" />
      <input type="text" class="input-area" placeholder="Phone Number" />
    </div>
    <div class="mt-3 select-cont">
      <select class="input-area dropdown" name id>
        <option selected disabled value>Monthly Salary</option>
        <option value>Less than 6 months</option>
        <option value>Less than 1 Years</option>
        <option value>More than 2 years</option>
      </select>
      <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
    </div>
    <div @click="hide = true" v-if="!hide" class="flex-center w-100 mt-4">
      <button class="side-hustle-btn">Add a side hustle</button>
    </div>
    <div class="pt-3" v-if="hide">
      <p class="pink-text mb-0">Side hustle</p>
      <textarea
        type="number"
        class="txt-area w-100 mt-2"
        placeholder="What do you do to the side after office hours?"
        rows="4"
      ></textarea>
      <div class="grid-area">
        <div class="mt-3 select-cont">
          <select class="input-area dropdown" name id>
            <option selected disabled value>How much do you make?</option>
            <option value>Less than 6 months</option>
            <option value>Less than 1 Years</option>
            <option value>More than 2 years</option>
          </select>
          <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
        </div>
        <div class></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: false
    };
  }
};
</script>

<style>
.employed .grid-area {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.employed .input-area {
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
.employed input,
textarea::placeholder {
  font-size: 14px;
  font-weight: 100;
}
.img-ico {
  position: absolute;
  right: 20px;
  padding-bottom: 10px;
  pointer-events: none;
}
.select-cont {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 20;
}
.side-hustle-btn {
  background: #fc559b;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
  width: 15vw;
  height: 7vh;
  font-weight: 100;
  font-size: 12px;
}
.txt-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 2vw;
  padding-top: 10px;
  resize: none;
}
</style>