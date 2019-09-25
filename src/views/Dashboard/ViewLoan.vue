<template>
  <div class="view-loan">
    <div class="flex">
      <img src="@/assets/images/backarrow.svg" @click="$router.go(-1)" alt class="click" />
      <h2 class="mb-0 pl-3 dim">My Loans</h2>
    </div>
    <table class="table table-shadow mt-5">
      <thead>
        <tr class="text-center">
          <th class="text-center" scope="col">
            Amount
            <br />Requested
          </th>
          <th scope="col">Loan Term</th>
          <th class="text-center" scope="col">
            Interest
            <br />Rate
          </th>
          <th scope="col">Duration</th>
          <th scope="col">
            Total
            <br />Repayment
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="i in  3" :key="i">
          <th class="d-flex align-items-center" scope="row">
            <div class="round"></div>
            <span class="pl-3">N500000</span>
          </th>
          <td>Weekly</td>
          <td>3%</td>
          <td>2 Weeks</td>
          <td>N515000</td>
          <td>view Details</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.table-shadow {
  background: #ffffff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}
.round {
  height: 16px;
  width: 16px;
  background: #fbf10a;
  border-radius: 50%;
}
</style>