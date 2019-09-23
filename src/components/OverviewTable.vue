<template>
  <div class="overview-table shadow-lg">
    <div class="abs">
      <div class="flex-between px-3 top fix">
        <h2 class="mb-0">Transactions</h2>
        <button class>View All</button>
      </div>
    </div>

    <div v-for="i in 5" :key="i">
      <div class="flex-between bl mx-4 mt-2">
        <div class="date m-0 flex-column align-items-center">
          <div>Sept</div>
          <div>06</div>
        </div>
        <div class="title">Business Loan</div>
        <button>Credit</button>
        <div>₦ 100,000.00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.overview-table {
  background: #ffffff;
  border: 0.5px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  width: 45vw;
  height: 48vh;
  overflow: scroll;
  position: relative;
}
.abs {
  position: sticky;
  background: #ffffff;
  top: 0;
  width: 100%;
}
.date {
  font-size: 22px;
  color: #696969;
}
.title {
  color: #525252;
  font-size: 18px;
  font-weight: 100;
}
.bl {
  border-bottom: 0.5px solid rgba(20, 20, 20, 0.25);
}
</style>