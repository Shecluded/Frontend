<template>
  <div class="dashboard">
    <header class="header flex-center shadow-sm">
      <h1 class="text-center">SHECLUDED</h1>
      <div v-if="$route.name!== 'profile'" class="btn-cont">
        <button class="logout-btn">Log Out</button>
      </div>
    </header>
    <div class="dashboard-cont">
      <div v-show="$route.name!== 'profile'" class="profile pt-5">
        <ProfileCard />
      </div>
      <div class="main pt-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard";
export default {
  components: {
    ProfileCard
  },
  watch: {
    $route: {
      immediate: true,
      handler(x) {
        if (x.name === "dashboard") {
          document.body.style.backgroundColor = "#f7f7f7";
        }
      }
    }
  }
};
</script>

<style>
.dashboard {
  width: 100vw;
}
.header {
  height: 8vh;
  background: white;
  color: #f740ac;
  font-size: 12px;
  position: fixed;
  width: 100%;
  z-index: 5;
}
.header h1 {
  font-size: 26px;
  font-style: italic;
  font-weight: bold;
}
.btn-cont {
  position: absolute;
  right: 0;
}
.logout-btn {
  height: 8vh;
  background: #808080;
  width: 8vw;
  color: white;
  border: none;
  font-size: 14px;
}
.dashboard-cont {
  width: 100vw;
  padding-top: 8vh;
}
.profile {
  width: 25vw;
  height: 92vh;
  position: fixed;
}
.main {
  margin-left: 28vw;
  width: 72vw;
  padding-right: 3.9vw;
}
</style>