import Vue from "vue";
import Router from "vue-router";
import store from "./store";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Default.vue"),
      meta: {
        access: "guest"
      },
      children: [
        {
          path: "",
          name: "login",
          component: () => import("@/views/Login.vue"),
          meta: {
            access: "guest"
          }
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/Register.vue"),
          meta: {
            access: "guest"
          }
        },
        {
          path: "verify-alert",
          name: "alert",
          component: () => import("@/views/Alert.vue"),
          meta: {
            access: "guest"
          }
        },

        {
          path: "welcome",
          name: "welcome",
          component: () => import("@/views/Welcome.vue"),
          meta: {
            access: "guest"
          }
        },
        {
          path: "verify",
          name: "verify",
          component: () => import("@/views/VerifyAccount.vue"),
          meta: {
            access: "guest"
          }
        },
        {
          path: "about-you",
          name: "about",
          component: () => import("@/views/About.vue"),
          meta: {
            access: "guest"
          }
        }
      ]
    },
    {
      path: "/dashboard",
      component: () => import("@/layouts/UserDashboard.vue"),
      meta: {
        access: "auth"
      },
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/Dashboard/Overview.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "view-loan",
          name: "viewloan",
          component: () => import("@/views/Dashboard/ViewLoan.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "invite",
          name: "invite",
          component: () => import("@/views/Dashboard/Invite.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "take-loan",
          name: "takeloan",
          component: () => import("@/views/Dashboard/TakeLoan.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "loan-apply",
          name: "applyloan",
          component: () => import("@/views/Dashboard/LoanApply.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "source-income",
          name: "sourceincome",
          component: () => import("@/views/Dashboard/SourceIncome.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "add-income",
          name: "addincome",
          component: () => import("@/views/Dashboard/AddIncome.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/Dashboard/Profile.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: ":id",
          name: "loandetails",
          component: () => import("@/views/Dashboard/LoanDetails.vue"),
          meta: {
            access: "auth"
          }
        }

        // {
        //   path: "results",
        //   name: "dashboard-result",
        //   component: () => import("@/views/dashboard/DashboardResult.vue")
        // }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem("shecludedtoken");
  if (to.meta.access == "guest") {
    if (currentUser) next("/dashboard");
    else next();
  } else if (to.meta.access == "auth") {
    if (currentUser) next();
    else next("/");
  }
});

export default router;
