<template>
  <div class="repayment">
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
          <tr class="grey-small">
            <th class="grey-small" scope="row">1</th>
            <td>N5000</td>
            <td>N5000</td>
            <td>N5000</td>
          </tr>
          <tr class="grey-small">
            <th class="grey-small" scope="row">2</th>
            <td>N7500</td>
            <td>N7500</td>
            <td>N7500</td>
          </tr>
          <tr class="grey-small">
            <th class="grey-small" scope="row">3</th>
            <td>N3000</td>
            <td>N3000</td>
            <td>N3000</td>
          </tr>
          <tr class="grey-two line pr-5">
            <th class scope="row">Total</th>
            <td>N23000</td>
            <td>N23000</td>
            <td>N23000</td>
          </tr>
        </tbody>
      </table>
      <button class="btn-area mt-3">Request Loan</button>
    </div>
  </div>
</template>

<script>
export default {};
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