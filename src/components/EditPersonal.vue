<template>
  <div class="edit-personal mt-5">
    <h2>Personal</h2>
    <div class="edit-personal-cont mt-4">
      <div class="d-flex justify-content-between w-100">
        <span class="pt-4">Profile Picture</span>
        <div class="edit-personal-area flex">
          <img src="@/assets/images/avatar.svg" alt />
          <label for="image">
            <div class="update-pic">Update Picture</div>
            <input type="file" name="image" id="image" style="display:none;" />
          </label>
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-4 align-items-center">
        <span>Edit Full Name</span>
        <div class="edit-personal-area grid-area">
          <input type="text" placeholder="First Name" class="input-area" />
          <input type="text" placeholder="Last Name" class="input-area" />
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span>Email address</span>
        <div class="edit-personal-area">
          <input type="text" placeholder="Email" class="input-area" />
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span>Mobile Number</span>
        <div class="edit-personal-area">
          <input type="number" placeholder="Mobile Number" class="input-area" />
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span>Date of Birth</span>
        <div class="edit-personal-area">
          <input
            placeholder="DD/MM/YY"
            class="input-area"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
          />
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3">
        <span class="pt-4">Edit-bio</span>
        <div class="edit-personal-area">
          <textarea type="text" placeholder="Bio" rows="4" class="pt-3"></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span></span>
        <div class="edit-personal-area">
          <button class="btn-area">Update Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.edit-personal {
  background: #ffffff;
  border: 0.75px solid rgba(252, 85, 155, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 50px;
}
.edit-personal h2 {
  color: #141414;
  font-size: 25px;
  font-weight: 300;
}
.edit-personal img {
  border-radius: 50%;
  height: 120px;
  width: 120px;
  object-fit: cover;
}
.edit-personal-cont {
  width: 60vw;
}
.edit-personal span {
  font-size: 12px;
  color: #7d7d7d;
}
.edit-personal-area {
  width: 40vw;
}
.update-pic {
  color: #fc559b;
  padding-left: 30px;
  font-size: 14px;
  font-weight: 100;
}
.edit-personal .input-area {
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

.edit-personal .grid-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.edit-personal textarea {
  resize: none;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 2vw;
  color: #7d7d7d;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 100;
}
.btn-area {
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  height: 7vh;
  padding-left: 2vw;
  color: white;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 100;
  background: #fc559b;
}
</style>