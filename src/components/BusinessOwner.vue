<template>
  <div class="business mt-5">
    <input
      type="text"
      class="input-area"
      placeholder="Company Name"
      v-model="BusinessOwnerData.companyName"
      name
      id
    />
    <input
      type="text"
      class="input-area mt-3"
      v-model="BusinessOwnerData.address"
      placeholder="Address"
      name
      id
    />
    <div class="grid-area mt-3">
      <input
        type="text"
        class="input-area"
        placeholder="Website"
        v-model="BusinessOwnerData.website"
      />
      <input
        type="text"
        class="input-area"
        placeholder="Phone Number"
        v-model="BusinessOwnerData.phoneNumber"
      />
    </div>
    <div class="mt-3 select-cont">
      <select class="input-area dropdown" v-model="BusinessOwnerData.businessLength" name id>
        <option selected disabled value>How long have you been in business?</option>
        <option>Less than 6 months</option>
        <option>Less than 1 Years</option>
        <option>More than 2 years</option>
      </select>
      <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
    </div>
    <div class="grid-area">
      <div class="mt-3 select-cont">
        <select class="input-area dropdown" name id v-model="BusinessOwnerData.profit">
          <option selected disabled value>Monthly Profit</option>
          <option>1 - 50,000</option>
          <option>50,001 - 500000</option>
          <option>More than 500000</option>
        </select>
        <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
      </div>
      <div class="mt-3 select-cont">
        <select class="input-area dropdown" name id v-model="BusinessOwnerData.employees">
          <option selected disabled value>Number of Employees</option>
          <option>less than 50</option>
          <option>More than 50</option>
          <option>More than 100</option>
        </select>
        <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
      </div>
    </div>
    <p class="pink-text pt-5 mb-0">For verfication</p>
    <input
      type="number"
      class="input-area mt-2"
      placeholder="Company registeration number"
      name
      id
      v-model="BusinessOwnerData.companyVerification"
    />
    <p class="grey-text pt-3 mb-0">Add social media accounts</p>
    <div class="flex mt-3">
      <div class="round-grey"></div>
      <div class="ml-3 round-grey"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BusinessOwnerData: {
        companyName: "",
        address: "",
        website: "",
        phoneNumber: "",
        businessLength: "",
        profit: "",
        employees: "",
        companyVerification: ""
      }
    };
  },
  watch: {
    BusinessOwnerData: {
      handler() {
        let isEmpty = Object.values(this.BusinessOwnerData).every(
          x => x === null || x === ""
        );

        this.$emit("hasValue", {
          isEmpty: isEmpty,
          BusinessOwner: this.BusinessOwnerData
        });
      },
      deep: true
    }
  }
};
</script>

<style>
.business .input-area {
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
.business input,
textarea::placeholder {
  font-size: 14px;
  font-weight: 100;
}
.business .grid-area {
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