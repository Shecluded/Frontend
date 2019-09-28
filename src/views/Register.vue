<template>
  <div class="login flex">
    <div class="login-content w-100 h-100">
      <div class="image-container flex-center mt-4">
        <img src="@/assets/images/logo.svg" alt />
      </div>


      <div class="login-content flex-column mx-auto mt-5">
        <h1 class="login-text">Create Your Account</h1>
        <p class="login-text-two">To apply for loans and funding</p>
        <div class="flex-column" v-if="$store.state.error !== ''">
          <span class="text-md mt-2">{{$store.state.error}}</span>
        </div>
        <div class="btn-container grid mt-3">
          <div class="w-100 flex-column">
            <input
              autocomplete="off"
              type="text"
              class="input-area"
              placeholder="First Name"
              v-model="input.firstName"
              @blur="$v.input.firstName.$touch()"
            />
            <div v-if="$v.input.firstName.$error">
              <span class="text-md" v-if="!$v.input.firstName.required">First name is required</span>
            </div>
          </div>
          <div class="w-100 flex-column">
            <input
              autocomplete="off"
              type="text"
              class="input-area"
              placeholder="Last Name"
              v-model="input.lastName"
              @blur="$v.input.lastName.$touch()"
            />
            <div v-if="$v.input.lastName.$error">
              <span class="text-md" v-if="!$v.input.lastName.required">Last name is required</span>
            </div>
          </div>
        </div>
        <div class="w-100 flex-column">
          <input
            autocomplete="off"
            type="text"
            class="input-area mt-3"
            placeholder="Email"
            v-model="input.email"
            @blur="$v.input.email.$touch()"
          />
          <div class="flex-column" v-if="$v.input.email.$error">
            <span class="text-md mt-2" v-if="!$v.input.email.required">Email is required</span>
          </div>
          <div class="flex-column" v-if="!emailIsValid && input.email !== ''">
            <span class="text-md mt-2" v-if="!emailIsValid">Enter valid email address</span>
          </div>
        </div>
        <div class="w-100 flex-column">
          <input
            autocomplete="off"
            type="text"
            class="input-area mt-3"
            placeholder="Mobile Number"
            v-model="input.mobileNumber"
            @blur="$v.input.mobileNumber.$touch()"
          />
          <div v-if="$v.input.mobileNumber.$error">
            <span class="text-md" v-if="!$v.input.mobileNumber.required">Mobile Number is required</span>
          </div>
        </div>
        <div class="w-100 flex-colimn">
          <div class="password-cont w-100 flex">
            <input
              required
              autocomplete="new-password"
              :type="passwordFieldType"
              class="input-area mt-3 w-100 flex"
              placeholder="Password"
              v-model="input.password"
              @blur="$v.input.password.$touch()"
            />
            <div>
              <div @click="switchVisibility" v-show="input.password !== ''" class="rounded-grey"></div>
            </div>
          </div>
          <div v-if="$v.input.password.$error">
            <span class="text-md mt-2" v-if="!$v.input.password.required">Password is required</span>
            <span
              class="text-md mt-2"
              v-if="!$v.input.password.minLength"
            >Password must be at least {{$v.input.password.$params.minLength.min}} characters long.</span>
          </div>
        </div>

        <button
          :class="{disabled:$v.$invalid || $store.state.error !== ''}"
          :disabled="$v.$invalid || $store.state.error !== ''"
          @click="submit()"
          type="text"
          class="button-area mt-3"
        >Register</button>
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
import { required, minLength, between } from "vuelidate/lib/validators";
import { mapState } from "vuex";
import * as firebase from "firebase";
export default {
  data() {
    return {
      error: this.$store.state.error,
      passwordFieldType: "password",
      disable: false,
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: ""
      }
    };
  },
  validations: {
    input: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      mobileNumber: {
        required
      }
    }
  },
  watch: {
    userIsLoggedIn(x) {
      if (x === true) {
        this.$router.push("/verify");
      }
    }
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    async submit() {
      this.disable = true;
      await this.$store.dispatch("signUser", {
        email: this.input.email,
        password: this.input.password,
        firstName: this.input.firstName,
        lastName: this.input.lastName,
        mobileNumber: this.input.mobileNumber
      });
    }
  },
  computed: {
    emailIsValid() {
      const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.input.email && exp.test(this.input.email);
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
  font-size: 14px;
  font-weight: 100;
}
.input-area::placeholder {
  font-size: 12px;
  font-weight: 100;
}
.text-md {
  font-size: 12px;
  font-weight: 100;
  color: #f740ac;
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
.disabled {
  background: #460129;
}
</style>