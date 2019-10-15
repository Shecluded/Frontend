<template>
  <div class="employed mt-5">
    <input
      type="text"
      class="input-area"
      placeholder="Name of company you work at"
      v-model="companyName"
      name
      id
    />

    <input type="text" class="input-area mt-3" placeholder="Address" v-model="address" name id />
    <div class="grid-area mt-3">
      <input type="text" class="input-area" placeholder="Website" v-model="website" />
      <input type="text" class="input-area" placeholder="Phone Number" v-model="phoneNumber" />
    </div>
    <div class="mt-3 select-cont">
      <select class="input-area dropdown" v-model="salary" name id>
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
        v-model="sideHustle"
      ></textarea>
      <div class="grid-area">
        <div class="mt-3 select-cont">
          <select class="input-area dropdown" name id v-model="hustleIncome">
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
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      hide: false
    };
  },
  computed: {
    ...mapFields([
      "Data.employed.companyName",
      "Data.employed.address",
      "Data.employed.phoneNumber",
      "Data.employed.salary",
      "Data.employed.website",
      "Data.employed.sideHustle",
      "Data.employed.hustleIncome"
    ])
  },
  watch: {
    "$store.state.Data": {
      handler(x) {
        let EmployedData = {
          companyName: this.$store.state.Data.employed.companyName,
          address: this.$store.state.Data.employed.address,
          phoneNumber: this.$store.state.Data.employed.phoneNumber,
          salary: this.$store.state.Data.employed.salary
        };
        let isEmptyThree = Object.values(EmployedData).every(
          x => x === null || x === ""
        );
        this.$emit("fieldsAreBlankThree", isEmptyThree);
        console.log(isEmptyThree);

        let exists = Object.keys(EmployedData).some(k => {
          return EmployedData[k] === "" || EmployedData[k] === null;
        });
        this.$emit("AllFieldsThree", exists);
      },

      deep: true
    }
    // employed: {
    //   handler() {
    //     let isEmpty = Object.values(this.employed).every(
    //       x => x === null || x === ""
    //     );
    //     this.$emit("hasValueThree", {
    //       isEmpty: isEmpty,
    //       employed: this.employed
    //     });
    //     let exists = Object.keys(this.employed).some(k => {
    //       return this.employed[k] === "" || this.employed[k] === null;
    //     });
    //     this.$emit("checkAll", exists);
    //   },
    //   deep: true
    // }
  },
  mounted() {
    this.$store.state.Data.employed.salary = "";
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