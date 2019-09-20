<template>
  <div class="overview">
    <div class="overview-cont">
      <div class="flex-between px-3 top">
        <h2 class="mb-0">Overview</h2>
        <button class>Pay Now</button>
      </div>
      <div class="overview-grid">
        <div class="area-one flex-column align-items-center mt-1">
          <img src="@/assets/images/moneyhand.svg" alt />
          <p class="mb-0 py-1 overview-figure">1,000,000</p>
          <p class="overview-type">Amount Loaned</p>
        </div>
        <div class="area-two flex-column align-items-center mt-1">
          <img src="@/assets/images/naira.svg" alt />
          <p class="mb-0 py-1 overview-figure">100,000</p>
          <p class="overview-type">Amount Paid</p>
        </div>
        <div class="area-three flex-column align-items-center mt-1">
          <div class="flex">
            <img src="@/assets/images/date.svg" alt />
            <p class="pl-3 mb-0">Due on Aug 22nd</p>
          </div>
          <p class="mb-0 py-1 overview-figure">100,000</p>
          <p class="overview-type">Next Payment</p>
        </div>
      </div>
      <div class="parent">
        <router-link to="/dashboard/take-loan" class="div1 div-card">
          <img src="@/assets/images/eclipse.svg" class="image-pos" alt />
          <div class="p-3">
            <img src="@/assets/images/book.svg" class="image-size" alt />
            <h3 class="pt-2 text-link flex w-100">
              Take Loan
              <br />Course
            </h3>
          </div>
        </router-link>
        <router-link to="/dashboard/view-loan" class="div2 div-card">
          <div class="p-3">
            <img src="@/assets/images/handcoin.svg" alt />
            <h3 class="pt-2 text-link">
              View my
              <br />Loans
            </h3>
          </div>
        </router-link>
        <router-link to="/dashboard/invite" class="div3 div-card">
          <div class="flex-center align-items-center h-100 friend">
            <div>Invite a friend</div>
          </div>
        </router-link>
        <router-link to="/dashboard/loan-apply" class="div4 div-card">
          <img src="@/assets/images/triangle.svg" class="image-pos" alt />
          <div class="p-3">
            <img src="@/assets/images/cash-hand.svg" class="image-size" alt />
            <h3 class="pt-2 flex w-100 text-link">
              Apply for
              <br />loan
            </h3>
          </div>
        </router-link>
        <router-link to="/dashboard/source-income" class="div5 div-card">
          <img src="@/assets/images/square.svg" class="image-pos" alt />
          <div class="p-3">
            <img src="@/assets/images/coins.svg" class="image-size" alt />
            <h3 class="pt-2 flex w-100 text-link">
              Sources of
              <br />income
            </h3>
          </div>
        </router-link>
        <div class="div6">
          <OverviewTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewTable from "../../components/OverviewTable";
export default {
  components: {
    OverviewTable
  }
};
</script>

<style>
.overview-cont {
  width: 100%;
  height: 32vh;
  background: #ffffff;
  border: 0.5px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.overview-cont h2 {
  color: #615d5d;
  font-size: 19px;
  font-weight: 100;
}
.overview-cont button {
  background: #fc559b;
  border-radius: 4px;
  width: 8vw;
  height: 4.8vh;
  border: none;
  font-size: 14px;
  color: white;
}
.top {
  height: 6.5vh;
  border-bottom: 0.25px solid #f740abfa;
}
.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 85%;
  padding-top: 15px;
  padding-bottom: 40px;
}
.area-one {
  border-right: 0.25px solid #f740abfa;
}
.area-three {
  border-left: 0.25px solid #f740abfa;
}

.overview-figure {
  font-size: 34px;
  color: #5a5a5a;
}
.overview-type {
  color: #858484;
  font-size: 14px;
  font-weight: 100;
}
.route-grid {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.route-grid > div {
  height: 20vh;
  width: 22vw;
}
.route-grid-two {
  display: flex;
  justify-content: space-between;
}
.one,
.two {
  height: 20vh;
  width: 22vw;
}
.three {
  width: 75.5vh;
}
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 14px;
  margin-bottom: 20px;
}
.div1 {
  grid-area: 1 / 1 / 3 / 3;
  height: 22vh;
}
.div2 {
  grid-area: 3 / 1 / 5 / 3;
  height: 22vh;
}
.div3 {
  grid-area: 5 / 1 / 7 / 3;
  height: 22vh;
}
.div4 {
  grid-area: 1 / 3 / 3 / 5;
  height: 22vh;
}
.div5 {
  grid-area: 1 / 5 / 3 / 7;
  height: 22vh;
}
.div6 {
  grid-area: 3 / 3 / 7 / 7;
  overflow-y: auto;
}
.div-card {
  background: #ffffff;
  border: 0.5px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.image-pos {
  position: absolute;
  right: 0;
  height: 80px;
  width: 80px;
}
.image-size {
  height: 60px;
  width: 60px;
}
.overview a {
  text-decoration: none;
  color: #5a5a5a;
}
.text-link {
  font-size: 24px;
}
.friend {
  background: #fc559b;
  color: white;
  font-size: 24px;
  border-radius: 4px;
}
</style>