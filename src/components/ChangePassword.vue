<template>
  <div class="change-password mt-5">
    <h2>Change Password</h2>
    <div class="change-password-cont mt-4">
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span></span>
        <div class="edit-finance-area">
          <input type="number" placeholder="Current Password" class="input-area" />
          <input type="number" placeholder="New Password" class="input-area mt-3" />
          <input type="number" placeholder="Re-type Password" class="input-area mt-3" />
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span></span>
        <div class="edit-finance-area">
          <button class="btn-area">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.change-password {
  background: #ffffff;
  border: 0.75px solid rgba(252, 85, 155, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 50px;
}
.change-password h2 {
  color: #141414;
  font-size: 25px;
  font-weight: 300;
}
.change-password-cont {
  width: 60vw;
}
.change-password span {
  font-size: 12px;
  color: #7d7d7d;
}
.change-password-area {
  width: 40vw;
}
.change-password .input-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 100;
}
</style>