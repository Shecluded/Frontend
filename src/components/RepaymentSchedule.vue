<template>
  <div v-if="loanTable == null" class="w-100 load d-flex justify-content-center align-items-center">
    <img src="@/assets/images/spinner.svg" alt />
  </div>

  <div class="repayment" v-else>
    <span class="bg-white p-3">Repayment Schedule</span>
    <div class="repayment-container bg-white">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th class="grey-two" scope="col ">Month</th>
            <th class="grey-two" scope="col">Capital</th>
            <th class="grey-two" scope="col">Interest</th>
            <th class="grey-two" scope="col">Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment,index) in loanTable.PaymentSchedule" :key="index" class="grey-small">
            <th class="grey-small" scope="row">{{index + 1}}</th>
            <td>₦{{payment.capital}}</td>
            <td>₦{{payment.interest}}</td>
            <td>₦{{payment.repayment}}</td>
          </tr>

          <tr class="grey-two line pr-5">
            <th class scope="row">Total</th>
            <td>₦{{loanTable.TotalCapital}}</td>
            <td>₦{{loanTable.TotalInterest}}</td>
            <td>₦{{loanTable.TotalRepayment}}</td>
          </tr>
        </tbody>
      </table>
      <button @click="getData" class="btn-area mt-3">Request Loan</button>
    </div>
  </div>
</template>

<script>
import db from "../firebase";
import * as firebase from "firebase";
export default {
  props: {
    loanTable: Object,
    loanApply: Object
  },
  methods: {
    async getData() {
      this.loanTable.PaymentSchedule = { ...this.loanTable.PaymentSchedule };
      let k = firebase.firestore.FieldValue.serverTimestamp();
      let j = { ...this.loanTable, ...this.loanApply };
      j.loanReqDate = k;
      j.loanStatus = "pending";
      j.userID = this.$store.state.userId;
      await db
        .collection("loans")
        .doc()
        .set(j, { merge: true });
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style>
.repayment {
  margin-top: 60px;
}
.repayment span {
  font-size: 16px;
  color: #7d7d7d;
}
.repayment-container {
  width: 55vw;
  padding: 60px;
}
.grey-two {
  color: #7d7d7d;
  font-size: 18px;
  font-weight: 500;
}
.grey-small {
  font-size: 14px;
  font-weight: 100;
  color: #7d7d7d;
}
.left {
  padding-left: 120px;
}
.line {
  border-top: 1px solid #7d7d7d;
}
</style>