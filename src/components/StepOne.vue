<template>
  <div class="step-one flex-column align-items-center mt-4">
    <h1 class="mb-0 mt-2">About You</h1>
    <p class="about-you">We would love to get to know a little more about you</p>
    <label for="image">
      <img src="@/assets/images/face.svg" class="mt-5" alt />
      <input type="file" name="image" id="image" style="display:none;" />
    </label>
    <p class="check">Click avatar to upload profile, We need to make sure you are not a man</p>
    <h2 class="text-bold">Bisola Coker</h2>
    <textarea
      class="form-control pl-3 textarea mt-5"
      id="exampleFormControlTextarea1"
      placeholder="Tell us a little more about you"
      rows="4"
    ></textarea>
    <div class="grid-area mt-3">
      <input type="number" class="input-area" placeholder="Phone Number" />
      <input
        type="text"
        class="input-area"
        placeholder="DOB"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
      />
    </div>
    <input type="number" class="input-area mt-3" placeholder="Street" />
    <div class="grid-area mt-3">
      <input type="text" class="input-area" placeholder="LGA" />
      <input type="text" class="input-area" placeholder="State" />
    </div>
    <p class="social-text pt-3">Add social media accounts</p>
    <div class="social-container">
      <div v-for="i in 5" :key="i">
        <div class="grey"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.step-one {
  width: 40%;
}
.step-one h1 {
  color: #fc559b;
  font-size: 35px;
  font-weight: bold;
}
.about-you {
  font-size: 14px;
  font-weight: 100;
}
.check {
  color: #fc559b;
  font-size: 12px;
  font-weight: 100;
}
.step-one textarea {
  resize: none;
  font-size: 14px;
  font-weight: 100;
  border: none;
  background: #fafafa;
  border-bottom: 1.5px solid #f740ac;
  border-radius: 0px;
}
.step-one textarea:focus {
  border: 0.75px solid #f740ac;
  box-shadow: none;
}
.step-one input,
textarea::placeholder {
  font-size: 14px;
  font-weight: 100;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.step-one .input-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
}
.step-one .input-area:focus {
  border: 0.75px solid #f740ac;
}
.step-one .grid-area {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.social-text {
  color: #ced0c5;
  font-size: 12px;
  font-weight: 100;
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.grey {
  background: #f1f1f1;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  width: 7vw;
}
.social-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
}
</style>