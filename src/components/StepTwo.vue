<template>
  <div class="step-two flex-column align-items-center mt-4">
    <h1 class="mb-0 mt-2">Source of Income</h1>
    <p class="about-you">How do you currently make money?</p>
    <ul class="nav mb-3 mt-5 tab-grid">
      <li class="nav-item">
        <button
          :class="{sactive:activeTab === 1 }"
          class="nav-link flex-center"
          @click="change(1)"
          :disabled="$store.state.statusTwo == true || $store.state.statusThree == true"
        >Business Owner</button>
      </li>
      <li class="nav-item">
        <button
          :class="{sactive:activeTab === 2 }"
          class="nav-link flex-center"
          data-toggle="pill"
          :disabled="$store.state.status == true|| $store.state.statusThree == true"
          @click="change(2)"
        >Self-employed</button>
      </li>
      <li class="nav-item">
        <button
          :class="{sactive:activeTab === 3 }"
          class="nav-link flex-center"
          :disabled="$store.state.statusTwo == true ||$store.state.status == true  "
          @click="change(3)"
        >Employed</button>
      </li>
    </ul>
    <div class="tab-content w-100" id="pills-tabContent">
      <div>
        <BusinessOwner @fieldsAreBlank="businessOne" @AllFields="next" v-if="activeTab === 1" />
      </div>
      <div>
        <SelfEmployed @fieldsAreBlankTwo="businessTwo" @AllFieldsTwo="next" v-if="activeTab === 2" />
      </div>
      <div>
        <Employed
          @fieldsAreBlankThree="businessThree"
          @AllFieldsThree="next"
          v-if="activeTab === 3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessOwner from "./BusinessOwner";
import SelfEmployed from "./SelfEmployed";
import Employed from "./Employed";

export default {
  data() {
    return {
      activeTab: null,
      newTab: null
    };
  },
  components: {
    BusinessOwner,
    SelfEmployed,
    Employed
  },
  watch: {
    "$store.state.activeTab": {
      handler(x) {
        this.activeTab = x;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    businessOne(e) {
      this.$store.commit("setStatus", !e);
    },
    businessTwo(e) {
      this.$store.commit("setStatusTwo", !e);
    },
    businessThree(e) {
      this.$store.commit("setStatusThree", !e);
    },
    change(x) {
      this.$store.commit("changeState", x);
    },
    next(e) {
      this.$emit("revertBack", !e);
    }
  },

  mounted() {
    this.$emit("revertBack", false);
    this.activeTab = this.$store.state.activeTab;
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
.sactive {
  background: #fc559b;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
}
.sactive:hover {
  color: white;
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