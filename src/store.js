import Vue from "vue";
import Vuex from "vuex";
import firebase from "@/Plugin/firebase.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userIsLoggedIn: false
  },
  mutations: {
    setUser(state, payload) {
      state.userIsLoggedIn = payload;
    }
  },
  actions: {
    signUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          if (user.user.uid) {
            let userId = user.user.uid;
            firebase
              .database()
              .ref("users/" + userId)
              .set({
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                mobileNumber: payload.mobileNumber
              });
            commit("setUser", true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
