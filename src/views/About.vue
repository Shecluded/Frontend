<template>
  <div class="flex-column align-items-center">
    <div class="progress-area">
      <step-progression
        class="icon"
        :steps="steps"
        :currentStep="currentStep"
        :currentStepColor="currentStepColor"
        :defaultColor="defaultColor"
      />
    </div>
    <StepOne v-if="currentStep === 1" @iniData="stepOneData" />
    <StepTwo v-if="currentStep === 2" @iniDataTwo="stepTwoData" />
    <StepThree v-if="currentStep === 3" @iniDataThree="stepThreeData" />
    <StepFour v-if="currentStep === 4" />

    <button
      v-if="currentStep < steps"
      @click="increaseStep(currentStep, steps);"
      class="about-btn mt-5 mb-5"
      type="button"
    >Next</button>
  </div>
</template>

<script>
import StepProgression from "vue-step-progression";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";

export default {
  components: {
    StepProgression,
    StepOne,
    StepTwo,
    StepThree,
    StepFour
  },
  data() {
    return {
      steps: 4,
      currentStep: StepProgression.props.currentStep.default,
      currentStepColor: "#F740AC",
      defaultColor: "#EDEDED",
      allData: {
        stepOne: null,
        stepTwo: null,
        stepThree: null
      }
    };
  },
  methods: {
    increaseStep(currentStep, steps) {
      if (currentStep < steps) {
        this.currentStep++;
      } else {
        return;
      }
    },
    stepOneData(e) {
      this.allData.stepOne = e;
    },
    stepTwoData(e) {
      this.allData.stepTwo = e;
    },
    stepThreeData(e) {
      this.allData.stepThree = e;
    }
  },
  updated() {
    console.log(this.allData);
  }
};
</script>

<style>
.progress-area {
  width: 20vw;
  margin-top: 50px;
}
.steps-line {
  height: 4px !important;
}
.step {
  height: 24px !important;
  width: 24px !important;
  margin-top: 5px !important;
}
.about-btn {
  background: #f740ac;
  border-radius: 4px;
  height: 7vh;
  color: white;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  width: 40%;
}
.step-progression-line {
  height: 4px !important;
  background: #f740ac !important;
  top: 0px !important;
  height: 95% !important;
  /* margin-left: 1px !important;
  padding-right: 3px !important; */
}
</style>