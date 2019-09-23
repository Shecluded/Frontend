<template>
  <div class="login flex">
    <div class="login-content w-100 h-100">
      <div class="image-container flex-center mt-4">
        <img src="@/assets/images/logo.svg" alt />
      </div>

      <div class="login-content flex-column mx-auto mt-5">
        <h1 class="login-text">Create Your Account</h1>
        <p class="login-text-two">To apply for loans and funding</p>
        <div class="btn-container grid mt-3">
          <input
            autocomplete="off"
            type="text"
            class="input-area"
            placeholder="First Name"
            v-model="input.firstName"
          />
          <input
            autocomplete="off"
            type="text"
            class="input-area"
            placeholder="Last Name"
            v-model="input.lastName"
          />
        </div>
        <input
          autocomplete="off"
          type="text"
          class="input-area mt-3"
          placeholder="Email"
          v-model="input.email"
        />
        <input
          autocomplete="off"
          type="text"
          class="input-area mt-3"
          placeholder="Mobile Number"
          v-model="input.mobileNumber"
        />
        <div class="password-cont w-100 flex">
          <input
            required
            autocomplete="new-password"
            :type="passwordFieldType"
            class="input-area mt-3 w-100 flex"
            placeholder="Password"
            v-model="input.password"
          />
          <div>
            <div @click="switchVisibility" v-show="input.password !== ''" class="rounded-grey"></div>
          </div>
        </div>

        <button @click="submit()" type="text" class="button-area mt-3">Register</button>
        <p class="text-center pt-3 mb-2">
          Already have an account?
          <router-link to="/">Log In</router-link>
        </p>
        <span
          class="policy-text text-center"
        >By clicking on Sign up, you agree to our terms & conditions and privacy policy</span>
      </div>
    </div>
    <div class="login-image w-100 h-100">
      <img src="@/assets/images/background.png" class="img-fluid object-cover w-100 h-100" alt />
    </div>
  </div>
</template>

<script>
import firebase from "@/Plugin/firebase.js";
export default {
  data() {
    return {
      passwordFieldType: "password",
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: ""
      }
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    submit() {
      this.$store.dispatch("signUser", {
        email: this.input.email,
        password: this.input.password,
        firstName: this.input.firstName,
        lastName: this.input.lastName,
        mobileNumber: this.input.mobileNumber
      });
      if (this.$store.state.userIsLoggedIn === true) {
        this.$router.push({
          name: "/verify-alert",
          params: {
            mobileNumber: this.input.mobileNumber
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
}
.login .login-content {
  width: 80%;
}
.login-text {
  font-weight: bold;
  font-size: 30px;
  color: #141414;
}
.login-text-two {
  font-size: 14px;
  font-weight: 100;
}
.login .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
.input-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  font-size: 14px;
  font-weight: 100;
}
.input-area::placeholder {
  font-size: 12px;
  font-weight: 100;
}
.input-area:focus {
  border: 0.75px solid #f740ac;
}
.password-cont {
  position: relative;
}
.rounded-grey {
  background: #c4c4c4;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
}
.button-area {
  background: #f740ac;
  border-radius: 4px;
  height: 7vh;
  color: white;
  outline: none;
  font-size: 13px;
  font-weight: 300;
}
.login a {
  color: #f740ac;
  text-decoration: none;
}
.login p {
  letter-spacing: 0.2px;
}
</style>