<template>
  <div class="add-income mx-5">
    <div class="flex">
      <img src="@/assets/images/backarrow.svg" @click="$router.go(-1)" alt class="click" />
      <h2 class="mb-0 pl-3 dim">Add more sources of income</h2>
    </div>
    <div class="add-income-container flex-column align-items-center mt-5">
      <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link flex-center active"
            id="pills-admin-business"
            data-toggle="pill"
            href="#pills-admin-bus"
            role="tab"
            aria-controls="pills-admin-bus"
            aria-selected="true"
          >Business Owner</a>
        </li>
        <li class="nav-item mx-4">
          <a
            class="nav-link flex-center"
            id="pills-admin-self"
            data-toggle="pill"
            href="#pills-admin-se"
            role="tab"
            aria-controls="pills-admin-se"
            aria-selected="false"
          >Self-employed</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link flex-center"
            id="pills-admin-employed"
            data-toggle="pill"
            href="#pills-admin-emp"
            role="tab"
            aria-controls="pills-admin-emp"
            aria-selected="false"
          >Employed</a>
        </li>
      </ul>
      <div class="tab-content area" id="pills-tabContent ">
        <div
          class="tab-pane fade show active"
          id="pills-admin-bus"
          role="tabpanel"
          aria-labelledby="pills-admin-business"
        >
          <BusinessOwner />
        </div>
        <div
          class="tab-pane fade"
          id="pills-admin-se"
          role="tabpanel"
          aria-labelledby="pills-admin-self"
        >
          <SelfEmployed />
        </div>
        <div
          class="tab-pane fade"
          id="pills-admin-emp"
          role="tabpanel"
          aria-labelledby="pills-admin-employed"
        >
          <Employed />
        </div>
      </div>
      <button
        @click="increaseStep(currentStep, steps);"
        class="about-btn mt-5 mb-5"
        type="button"
      >Next</button>
    </div>
  </div>
</template>

<script>
import BusinessOwner from "../../components/BusinessOwner";
import SelfEmployed from "../../components/SelfEmployed";
import Employed from "../../components/Employed";

export default {
  components: {
    BusinessOwner,
    SelfEmployed,
    Employed
  }
};
</script>

<style>
.add-income-container {
  background: white;
}
.add-income .nav-link {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: #7d7d7d;
  font-weight: 100;
  font-size: 14px;
  width: 12.8vw;
  height: 6.5vh;
}

.add-income .nav-pills .nav-link.active {
  background: #fc559b;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
}
.add-income .tab-grid {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.add-income .tab-contents {
  width: 42vw;
}
.add-income .area {
  width: 42vw;
  margin-bottom: 20px;
}
.add-income .about-btn {
  background: #f740ac;
  border-radius: 4px;
  height: 7vh;
  color: white;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  width: 42vw;
}
</style>