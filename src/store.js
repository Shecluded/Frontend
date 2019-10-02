import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import db from "./firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    userIsLoggedIn: false,
    error: ""
  },
  mutations: {
    setUser(state, payload) {
      state.userIsLoggedIn = payload || true;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
    setError(state, payload) {
      state.error = payload;
      setTimeout(() => {
        state.error = "";
      }, 5000);
    }
  },
  actions: {
    signUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          let userId = user.user.uid;
          if (userId) {
            db.collection("users")
              .add({
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                mobileNumber: payload.mobileNumber
              })
              .then((user) => {
                console.log(user)
                if (user) {
                  commit("setUserId", user.id);
                  commit("setUser", true);
                } else {
                  console.log("error");
                }
              });
          }
        })
        .catch(err => {
          commit("setError", err);
        });
    },
    loginUser({ commit }, payload)  {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            const userToken = user.user.ma
            localStorage.setItem("shecludedtoken", userToken)
          })
          .catch(error => {
            commit("setError", error)
          })

    },
    logoutUser({ commit }) {
      localStorage.removeItem("shecludedtoken");
      commit("setUser", false)
      firebase.auth().signOut();
    }
  }
});
