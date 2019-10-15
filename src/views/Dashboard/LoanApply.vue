<template>
  <div class="ml-5 apply-loan">
    <div class="flex">
      <img src="@/assets/images/backarrow.svg" @click="$router.go(-1)" alt class="click" />
      <h2 class="mb-0 pl-3 dim">Apply for a Loan</h2>
    </div>
    <div class="sp pt-4">Repayment Term</div>
    <form @submit.prevent="calculateLoan">
      <input
        type="number"
        placeholder="Amount"
        required
        class="input-area mt-3"
        v-model="loanApply.loanAmount"
      />
      <!-- <div class="flex align-items-center mt-3 input">
      <input type="number" placeholder="Attach Bank Statement" class="input-area" />
      <label class="label" for="image">
        <img src="@/assets/images/plus.svg" class="plus-image" alt />
        <input type="file" name="image" id="image" style="display:none;" />
      </label>
      </div>-->
      <textarea
        required
        name
        id
        class="text-area mt-3 pt-3"
        rows="5"
        v-model="loanApply.loanDesc"
        placeholder="Why do you need the Loan ?"
      ></textarea>
      <div class="sp pt-4">Repayment Term</div>
      <div class="grid-area">
        <div class="mt-3 select-cont">
          <select class="input-area dropdown" name id v-model="loanApply.loanTerm">
            <option selected disabled value>Loan Term</option>
            <option>monthly</option>
            <option>weekly</option>
          </select>
          <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
        </div>
        <div class="mt-3 select-cont">
          <select class="input-area dropdown" v-model="loanApply.loanDuration" name id>
            <option selected disabled value>Loan Duration</option>
            <option v-for="i in 12">{{i}}</option>
          </select>
          <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
        </div>
      </div>
      <button type="submit" @click.native="calculateLoan" class="btn-area mt-3">Calculate Loan</button>
    </form>
    <RepaymentSchedule :loanTable="loanTable" :loanApply="loanApply" v-if="show" />
  </div>
</template>

<script>
import { functions } from "../../firebase";
import RepaymentSchedule from "../../components/RepaymentSchedule";
export default {
  data() {
    return {
      show: false,
      loanApply: {
        loanAmount: null,
        loanDesc: "",
        loanTerm: "",
        loanDuration: ""
      },
      loanTable: null
    };
  },
  components: {
    RepaymentSchedule
  },
  methods: {
    calculateLoan() {
      const Calculate_Loan = functions.httpsCallable("Calculate_Loan");
      Calculate_Loan({
        loanAmount: Number(this.loanApply.loanAmount),
        loanDuration: Number(this.loanApply.loanDuration),
        loanTerm: this.loanApply.loanTerm
      }).then(data => {
        this.loanTable = data.data;
        console.log(this.loanTable);
      });
      this.show = true;
    }
  }
};
</script>

<style>
.apply-loan {
  width: 40vw;
}
.sp {
  font-weight: 100;
  color: #ced0c5;
}
.apply-loan h2 {
  font-size: 24px;
}
.apply-loan .input-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 100;
}
.apply-loan .text-area {
  resize: none;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 100;
}
.plus {
  height: 48px;
  background: #7d7d7d;
}
.apply-loan .input {
  position: relative;
}
.label {
  position: absolute;
  right: 0;
}
.plus-image {
  height: 7vh;
}
.apply-loan .grid-area {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.img-ico {
  position: absolute;
  right: 20px;
  padding-bottom: 10px;
  pointer-events: none;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.dropdown {
  background: white;
  font-weight: 100;
}
.select-cont {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 20;
}
.apply-loan .btn-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: white;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 100;
  background: #fc559b;
  border: none;
}
</style>