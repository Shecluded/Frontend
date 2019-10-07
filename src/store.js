import Vue from "vue";
import Vuex from "vuex";
import db from "./firebase.js";
import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    userIsLoggedIn: false,
    error: "",
    user: {},
    aboutData: {
      aboutYou: ""
    }
  },
  mutations: {
    setUser(state, payload) {
      state.userIsLoggedIn = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
    setError(state, payload) {
      state.error = payload;
      setTimeout(() => {
        state.error = "";
      }, 5000);
    },
    setId(state, payload) {
      state.user = payload;
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
                mobileNumber: payload.mobileNumber,
                id: userId
              })
              .then(user => {
                if (user) {
                  commit("setUserId", userId);
                  commit("setUser", true);
                }
              });
          }
        })
        .catch(err => {
          commit("setError", err);
          commit("setUser", false);
        });
    },

    loginUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", true);
          const userToken = user.user.ma;
          localStorage.setItem("shecludedtoken", userToken);
          return user;
        })
        .catch(error => {
          commit("setUser", false);
          commit("setError", error.message);
        });
    },
    logoutUser({ commit }) {
      localStorage.removeItem("shecludedtoken");
      commit("setUser", false);
    },
    getUser({ commit, rootState }) {
      db.collection("users")
        .where("id", "==", rootState.userId)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            commit("setId", doc.data());
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    },
    getAboutYou({ commit }, payload) {
      let aboutYouData = {};
      db.collection("users")
        .where("id", "==", rootState.userId)
        .add();
    }
  },
  plugins: [createPersistedState()]
});
