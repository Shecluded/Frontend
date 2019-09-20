<template>
  <div class="profile-card">
    <div class="profile-card-cont flex-column align-items-center">
      <img src="@/assets/images/kidavatar.svg" class="avatar-image" alt />
      <h1 class="pt-3 text-center">Bisola Coker</h1>
      <p
        class="text-center px-4"
      >I am a business woman building a fashion brand and empowering young fashion entreprenuers</p>
      <img src="@/assets/images/social.svg" alt />
    </div>
    <button @click="$router.push('/dashboard/profile')" class="avatar-btn mt-4">Edit Profile</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profile-card {
  width: 80%;
  margin-left: 20%;
}
.profile-card-cont {
  background: #ffffff;
  border: 0.5px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(225, 225, 225, 0.25);
  border-radius: 4px;
  height: 50vh;
}
.profile-card-cont .avatar-image {
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 50%;
}
.profile-card-cont h1 {
  color: #565656;
  font-size: 30px;
}
.profile-card-cont p {
  color: #535353;
  font-size: 14px;
  font-weight: 100;
}
.avatar-btn {
  background: #fc559b;
  border-radius: 5px;
  width: 100%;
  border: none;
  height: 7vh;
  color: white;
}
</style>