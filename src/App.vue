<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f7f7f7;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.object-cover {
  object-fit: cover;
}
.object-contain {
  object-fit: contain;
}
.policy-text {
  font-size: 12.5px;
  cursor: pointer;
}
button {
  outline: none;
  box-shadow: none;
}
button:focus {
  outline: none;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.click {
  cursor: pointer;
}
.dim {
  color: #525252;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
