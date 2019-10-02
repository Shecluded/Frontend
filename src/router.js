import Vue from "vue";
import Router from "vue-router";
import { FirebaseAuth } from 'vuefire'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Default.vue"),
      children: [
        {
          path: "",
          name: "login",
          component: () => import("@/views/Login.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/Register.vue")
        },
        {
          path: "verify-alert",
          name: "alert",
          component: () => import("@/views/Alert.vue")
        },

        {
          path: "welcome",
          name: "welcome",
          component: () => import("@/views/Welcome.vue")
        },
        {
          path: "verify",
          name: "verify",
          component: () => import("@/views/VerifyAccount.vue")
        },
        {
          path: "about-you",
          name: "about",
          component: () => import("@/views/About.vue")
        }
      ]
    },
    {
      path: "/dashboard",
      component: () => import("@/layouts/UserDashboard.vue"),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/Dashboard/Overview.vue")
        },
        {
          path: "view-loan",
          name: "viewloan",
          component: () => import("@/views/Dashboard/ViewLoan.vue")
        },
        {
          path: "invite",
          name: "invite",
          component: () => import("@/views/Dashboard/Invite.vue")
        },
        {
          path: "take-loan",
          name: "takeloan",
          component: () => import("@/views/Dashboard/TakeLoan.vue")
        },
        {
          path: "loan-apply",
          name: "applyloan",
          component: () => import("@/views/Dashboard/LoanApply.vue")
        },
        {
          path: "source-income",
          name: "sourceincome",
          component: () => import("@/views/Dashboard/SourceIncome.vue")
        },
        {
          path: "add-income",
          name: "addincome",
          component: () => import("@/views/Dashboard/AddIncome.vue")
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/Dashboard/Profile.vue")
        }

        // {
        //   path: "results",
        //   name: "dashboard-result",
        //   component: () => import("@/views/dashboard/DashboardResult.vue")
        // }
      ]
    }
    // {
    //   path: "*",
    //   component: () => import("@/views/NotFound.vue")
    // }
  ]
  
});

//route guard
router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem('shecludedtoken');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) {
    next('/');
  } else if(requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;
