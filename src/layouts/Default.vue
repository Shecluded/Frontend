<template>
  <div class="main">
    <header v-if="$route.name !== 'login'" class="w-100 flex-center main-logo pt-5">
      <img src="@/assets/images/logo.svg" alt />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.main-logo {
  height: 10vh;
}
</style>