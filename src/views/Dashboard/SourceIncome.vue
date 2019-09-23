<template>
  <div class="ml-5 source-income">
    <div class="flex-between">
      <div class="flex">
        <img src="@/assets/images/backarrow.svg" @click="$router.go(-1)" alt class="click" />
        <h2 class="mb-0 pl-3 dim">Sources of income</h2>
      </div>
      <button class="px-3">Add more sources of income</button>
    </div>
    <div class="source-container mt-5">
      <div v-for="i in 4" :key="i">
        <div class="source-card mt-4 pl-3 pt-2">
          <h2>Business Owner</h2>
          <div class="flex-between">
            <div class="flex-column">
              <span>Yoka Technologies</span>
              <span class="pt-1">
                115, Herbert Macauly way,
                <br />New Silicon Valley, Yaba, Lagos.
              </span>
              <span class="pt-1">+234 801 234 5678</span>
            </div>
            <div class="flex-center pr-3">
              <div class="flex-column align-items-center">
                <div class="grey-circle"></div>120k
                <span>Monthly Profit</span>
              </div>
              <div class="pl-3 flex-column align-items-center">
                <div class="grey-circle"></div>3
                <span>No of Employees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.source-income {
  width: 63vw;
}
.source-income h2 {
  font-size: 24px;
}
.source-income button {
  background: #fc559b;
  border-radius: 4px;
  height: 4.8vh;
  border: none;
  font-size: 14px;
  color: white;
}
.source-container {
  width: 63vw;
  display: grid;
  grid-template-columns: 320px 320px;
  justify-content: space-evenly;
}
.source-card {
  background: #ffffff;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 20vh;
}
.source-card h2 {
  color: #7d7d7d;
  font-size: 20px;
  font-weight: bold;
}
.source-card span {
  color: #7d7d7d;
  font-size: 9px;
  font-weight: 500;
}
.source-card span:first-child {
  font-weight: bold;
  font-size: 10px;
}
.grey-circle {
  background: #c4c4c4;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-bottom: 5px;
}
</style>