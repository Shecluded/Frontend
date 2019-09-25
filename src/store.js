import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import db from "./firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userIsLoggedIn: false,
    error: ""
  },
  mutations: {
    setUser(state, payload) {
      state.userIsLoggedIn = payload;
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
              .then(ref => {
                var user = firebase.auth().currentUser;
                if (user) {
                  commit("setUserId", user.uid);
                } else {
                  console.log("error");
                }
              });
          }
        })
        .catch(err => {
          commit("setError", err);
        });
    }
  }
});
