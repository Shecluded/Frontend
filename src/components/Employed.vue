<template>
  <div class="employed mt-5">
    <input
      type="text"
      class="input-area"
      placeholder="Name of company you work at"
      v-model="employed.companyName"
      name
      id
    />
    <input
      type="text"
      class="input-area mt-3"
      placeholder="Address"
      v-model="employed.address"
      name
      id
    />
    <div class="grid-area mt-3">
      <input type="text" class="input-area" placeholder="Website" v-model="employed.website" />
      <input
        type="text"
        class="input-area"
        placeholder="Phone Number"
        v-model="employed.phoneNumber"
      />
    </div>
    <div class="mt-3 select-cont">
      <select class="input-area dropdown" v-model="employed.salary" name id>
        <option selected disabled value>Monthly Salary</option>
        <option>1 - 50,000</option>
        <option>50,001 - 500000</option>
        <option>More than 500000</option>
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
        v-model="employed.sideHustle"
      ></textarea>
      <div class="grid-area">
        <div class="mt-3 select-cont">
          <select class="input-area dropdown" name id v-model="employed.hustleIncome">
            <option selected disabled value>How much do you make?</option>
            <option>1 - 50,000</option>
            <option>50,001 - 500000</option>
            <option>More than 500000</option>
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
      hide: false,
      employed: {
        companyName: "",
        address: "",
        website: "",
        phoneNumber: "",
        salary: "",
        sideHustle: "",
        hustleIncome: ""
      }
    };
  },
  watch: {
    employed: {
      handler() {
        let isEmpty = Object.values(this.employed).every(
          x => x === null || x === ""
        );
        this.$emit("hasValueThree", {
          isEmpty: isEmpty,
          employed: this.employed
        });
      },
      deep: true
    }
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