<template>
  <div class="login flex">
    <div class="login-content flex-column align-items-center w-100 h-100">
      <div class="image-container flex-center">
        <img src="@/assets/images/logo.svg" alt />
      </div>

      <div class="login-content flex-column mx-auto mt-5">
        <h1 class="login-text">Login to your Account</h1>
        <p class="login-text-two">To apply for loans and funding</p>

        <input 
          autocomplete="off"
          type="text"
          class="input-area mt-3"
          placeholder="Email"
          @blur="$v.user.email.$touch()"
          v-model="user.email"
          />
          <div class="flex-column" v-if="$v.user.email.$error">
            <span class="text-md mt-2" v-if="!$v.user.email.required">Email is required</span>
          </div>
          <div class="flex-column" v-if="!emailIsValid && user.email !== ''">
            <span class="text-md mt-2" v-if="!emailIsValid">Enter valid email address</span>
          </div>

        <div class="password-cont w-100 flex">
          <input
            required
            autocomplete="new-password"
            :type="passwordFieldType"
            class="input-area mt-3 w-100 flex"
            placeholder="Password"
            v-model="user.password"
            @blur="$v.user.password.$touch()"
          />
          <div v-if="$v.user.password.$error">
            <span class="text-md mt-2" v-if="!$v.user.password.required">Password is required</span>
          </div>
          <div>
            <div @click="swithVisibility" v-show="password !== ''" class="rounded-grey"></div>
          </div>
        </div>

        <button 
          :class="{disabled:$v.$invalid || $store.state.error !== ''}"
          :disabled="$v.$invalid || $store.state.error !== ''"
          @click="login()"
          type="text" 
          class="button-area mt-3"
        >Login
        </button>
        <p class="text-center pt-3 mb-2">
          Don't have an account?
          <router-link to="/register">Register</router-link>
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
import { required } from "vuelidate/lib/validators";
import { mapState } from 'vuex'
import firebase from '../firebase'
export default {
  data() {
    return {
      passwordFieldType: "password",
      user: {
        email: "",
        password: "",
      },
      disable: false,
      error: this.$store.state.error
    };
  },
  validations: {
    user: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    swithVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    async login() {
      await this.$store.dispatch("loginUser", {
        email: this.user.email,
        password: this.user.password
      });
    }
  },
  computed: {
    emailIsValid() {
      const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.user.email && exp.test(this.user.email);
    },
    ...mapState(["userIsLoggedIn"])
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