<template>
  <div class="self-employed mt-5">
    <input
      type="text"
      class="input-area"
      placeholder="Business Name"
      v-model="businessName"
      name
      id
    />
    <input type="text" class="input-area mt-3" placeholder="Address" name id v-model="address" />
    <div class="grid-area mt-3">
      <input type="text" class="input-area" placeholder="Website" v-model="website" />
      <input type="text" class="input-area" placeholder="Phone Number" v-model="phoneNumber" />
    </div>
    <div class="mt-3 select-cont">
      <select class="input-area dropdown" v-model="businessLength" name id>
        <option selected disabled value>How long have you been in business?</option>
        <option>Less than 6 months</option>
        <option>Less than 1 Years</option>
        <option>More than 2 years</option>
      </select>
      <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
    </div>
    <div class="grid-area">
      <div class="mt-3 select-cont">
        <select class="input-area dropdown" v-model="monthlyProfit" name id>
          <option selected disabled value>Monthly Profit</option>
          <option>1 - 50,000</option>
          <option>50,001 - 500000</option>
          <option>More than 500000</option>
        </select>
        <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
      </div>
      <div class></div>
    </div>
    <p class="pink-text pt-5 mb-0">For verfication</p>
    <input
      v-model="companyRegistrationNumber"
      type="text"
      class="input-area mt-2"
      placeholder="Company registeration number"
      name
      id
    />
    <!-- <p class="grey-text pt-3 mb-0">Add social media accounts</p>
    <div class="flex mt-3">
      <div class="round-grey"></div>
      <div class="ml-3 round-grey"></div>
    </div>-->
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields([
      "Data.selfEmployed.businessName",
      "Data.selfEmployed.address",
      "Data.selfEmployed.website",
      "Data.selfEmployed.phoneNumber",
      "Data.selfEmployed.businessLength",
      "Data.selfEmployed.monthlyProfit",
      "Data.selfEmployed.companyRegistrationNumber"
    ])
  },
  watch: {
    "$store.state.Data": {
      handler(x) {
        let selfEmployedData = this.$store.state.Data.selfEmployed;
        // var exists = Object.keys(checkFirst).some(k => {
        //   return checkFirst[k] === "" || checkFirst[k] === null;
        // });
        // this.$emit("checkAll", exists);
        // let isEmpty = Object.values(checkFirst).every(
        //   x => x === null || x === ""
        // );
        // this.$emit("hasValueTwo", isEmpty);
        let isEmptyTwo = Object.values(selfEmployedData).every(
          x => x === null || x === ""
        );
        this.$emit("fieldsAreBlankTwo", isEmptyTwo);

        let exists = Object.keys(selfEmployedData).some(k => {
          return selfEmployedData[k] === "" || selfEmployedData[k] === null;
        });
        this.$emit("AllFieldsTwo", exists);
      },

      deep: true
    }
    // selfEmployed: {
    //   handler() {
    //     console.log(this.selfEmployed.businessLength);
    //     console.log(this.selfEmployed.monthlyProfit);
    //     let isEmpty = Object.values(this.selfEmployed).every(
    //       x => x === null || x === ""
    //     );
    //     this.$emit("hasValueTwo", {
    //       isEmpty: isEmpty,
    //       selfEmployed: this.selfEmployed
    //     });
    //     let exists = Object.keys(this.selfEmployed).some(k => {
    //       return this.selfEmployed[k] === "" || this.selfEmployed[k] === null;
    //     });
    //     this.$emit("checkAll", exists);
    //   },
    //   deep: true
    // }
  },
  mounted() {
    this.$store.state.Data.selfEmployed.businessLength = "";
    this.$store.state.Data.selfEmployed.monthlyProfit = "";
  }
};
</script>

<style>
.self-employed .input-area {
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
.dropdown {
  background: white;
  font-weight: 100;
}
.self-employed input,
textarea::placeholder {
  font-size: 14px;
  font-weight: 100;
}
.self-employed .grid-area {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
.pink-text {
  font-size: 14px;
  color: #fc559b;
}
.grey-text {
  color: #7d7d7d;
  font-size: 14px;
  font-weight: 100;
}
.round-grey {
  background: #f1f1f1;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 24px;
  height: 7vh;
  width: 6vw;
}
</style>