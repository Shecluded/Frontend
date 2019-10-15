import Vue from "vue";
import Vuex from "vuex";
import db from "./firebase.js";
import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    userIsLoggedIn: false,
    loading: false,
    error: "",
    status: false,
    statusTwo: false,
    statusThree: false,
    activeTab: 1,
    newTab: null,
    user: "",
    refId: "",
    aboutData: [],
    Data: {
      profilePic: "",
      userBio: "",
      dateOfBirth: "",
      currentLocation: "",
      localGovernment: "",
      userState: "",
      BusinessOwnerData: {
        companyName: "",
        address: "",
        website: "",
        phoneNumber: "",
        businessLength: "",
        profit: "",
        employees: "",
        companyVerification: ""
      },
      selfEmployed: {
        businessName: "",
        address: "",
        website: "",
        phoneNumber: "",
        businessLength: "",
        monthlyProfit: "",
        companyRegistrationNumber: ""
      },
      employed: {
        companyName: "",
        address: "",
        website: "",
        phoneNumber: "",
        salary: "",
        sideHustle: "",
        hustleIncome: ""
      },
      goal: ""
    }
  },
  getters: {
    getField
  },
  mutations: {
    updateField,
    setUser(state, payload) {
      state.userIsLoggedIn = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
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
    },
    setRefId(state, payload) {
      state.refId = payload;
    },
    updateData(state, payload) {
      state.allData = payload;
    },
    setImage(state, payload) {
      state.Data.profilePic = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
    setStatusTwo(state, payload) {
      state.statusTwo = payload;
    },
    setStatusThree(state, payload) {
      state.statusThree = payload;
    },
    changeState(state, payload) {
      state.activeTab = payload;
    }
  },
  actions: {
    signUser({ commit }, payload) {
      commit("setLoading", true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          user.user.updateProfile({
            displayName: payload.firstName
          });
          let userId = user.user.uid;
          console.log(user);
          if (userId) {
            db.collection("users")
              .add({
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                mobileNumber: payload.mobileNumber,
                userID: userId,
                createdDate: new Date()
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, "/")
              })
              .then(user => {
                commit("setRefId", user.id);
                commit("setLoading", false);
                commit("setUserId", userId);
                commit("setUser", true);
              });
          }
        })
        .catch(err => {
          commit("setError", err);
          commit("setUser", false);
          commit("setLoading", false);
        });
    },

    loginUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          let userId = user.user.uid;
          commit("setUserId", userId);
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
        .where("userID", "==", rootState.userId)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            commit("setId", doc.data());
          });
        })
        .catch(err => {});
    }
  },

  plugins: [
    createPersistedState({
      paths: [
        // "user",
        // "aboutData",
        "userId",
        "refId"
        // "Data",
        // "status",
        // "statusTwo",
        // "statusThree",
        // "activeTab"
      ]
    })
  ]
});
