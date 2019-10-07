<template>
  <div class="step-two flex-column align-items-center mt-4">
    <h1 class="mb-0 mt-2">Source of Income</h1>
    <p class="about-you">How do you currently make money?</p>
    <ul class="nav nav-pills mb-3 mt-5 tab-grid" id="pills-tab" role="tablist">
      <li class="nav-item">
        <button
          class="nav-link flex-center active"
          id="pills-home-tab"
          data-toggle="pill"
          :disabled="statusTwo== true || statusThree==true"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >Business Owner</button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link flex-center"
          id="pills-profile-tab"
          data-toggle="pill"
          :disabled="status== true ||  statusThree == true"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >Self-employed</button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link flex-center"
          id="pills-contact-tab"
          :disabled="status== true||statusTwo== true "
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >Employed</button>
      </li>
    </ul>
    <div class="tab-content w-100" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <BusinessOwner @hasValue="val" />
      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <SelfEmployed @hasValueTwo="valTwo" />
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <Employed @hasValueThree="valThree" />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessOwner from "./BusinessOwner";
import SelfEmployed from "./SelfEmployed";
import Employed from "./Employed";

export default {
  components: {
    BusinessOwner,
    SelfEmployed,
    Employed
  },
  data() {
    return {
      status: false,
      statusTwo: false,
      statusThree: false,
      statusData: null
    };
  },
  methods: {
    val(e) {
      this.status = !e.isEmpty;
      this.statusData = e.BusinessOwner;
    },
    valTwo(e) {
      this.statusTwo = !e.isEmpty;
      this.statusData = e.selfEmployed;
    },
    valThree(e) {
      this.statusThree = !e.isEmpty;
      this.statusData = e.employed;
    }
  },
  destroyed() {
    this.$emit("iniDataTwo", this.statusData);
  }
};
</script>

<style>
.step-two {
  width: 40%;
}
.step-two h1 {
  color: #fc559b;
  font-size: 35px;
  font-weight: bold;
}
.about-you {
  font-size: 14px;
  font-weight: 100;
}
.nav-link {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: #7d7d7d;
  font-weight: 100;
  font-size: 14px;
  width: 12.8vw;
  height: 6.5vh;
}
.nav-link:hover {
  color: #7d7d7d;
}
.nav-pills .nav-link.active {
  background: #fc559b;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
}
.tab-grid {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.disabled {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: white;
}
/* .check {
  color: #fc559b;
  font-size: 12px;
  font-weight: 100;
}
.step-one textarea {
  resize: none;
  font-size: 14px;
  font-weight: 100;
  border: none;
  background: #fafafa;
  border-bottom: 1.5px solid #f740ac;
  border-radius: 0px;
}
.step-one textarea:focus {
  border: 0.75px solid #f740ac;
  box-shadow: none;
}
.step-one input,
textarea::placeholder {
  font-size: 14px;
  font-weight: 100;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.step-one .input-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
}
.step-one .input-area:focus {
  border: 0.75px solid #f740ac;
}
.step-one .grid-area {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.social-text {
  color: #ced0c5;
  font-size: 12px;
  font-weight: 100;
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.grey {
  background: #f1f1f1;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  width: 7vw;
}
.social-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
} */
</style>