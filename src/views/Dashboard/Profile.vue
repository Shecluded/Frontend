<template>
  <div class="edit-profile">
    <div class="edit-profile-cont">
      <div class="flex">
        <img src="@/assets/images/backarrow.svg" @click="$router.go(-1)" alt class="click" />
        <h2 class="mb-0 pl-3">Profile</h2>
      </div>
      <ul class="nav mt-5 nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active pl-0 pr-0"
            id="pills-personal-tab"
            data-toggle="pill"
            href="#pills-personal"
            role="tab"
            aria-controls="pills-personal"
            aria-selected="true"
          >Personal</a>
        </li>
        <li class="nav-item pl-4">
          <a
            class="nav-link pl-0 pr-0"
            id="pills-finance-tab"
            data-toggle="pill"
            href="#pills-finance"
            role="tab"
            aria-controls="pills-finance"
            aria-selected="false"
          >Finance</a>
        </li>
        <li class="nav-item pl-4">
          <a
            class="nav-link pl-0 pr-0"
            id="pills-changepassword-tab"
            data-toggle="pill"
            href="#pills-changepassword"
            role="tab"
            aria-controls="pills-changepassword"
            aria-selected="false"
          >Change password</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-personal"
          role="tabpanel"
          aria-labelledby="pills-personal-tab"
        >
          <Edit-personal />
        </div>
        <div
          class="tab-pane fade"
          id="pills-finance"
          role="tabpanel"
          aria-labelledby="pills-finance-tab"
        >
          <Edit-finance />
        </div>
        <div
          class="tab-pane fade"
          id="pills-changepassword"
          role="tabpanel"
          aria-labelledby="pills-changepassword-tab"
        >
          <Change-password />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditPersonal from "../../components/EditPersonal";
import EditFinance from "../../components/EditFinance";
import ChangePassword from "../../components/ChangePassword";

export default {
  components: {
    EditPersonal,
    EditFinance,
    ChangePassword
  }
};
</script>

<style>
.edit-profile {
  position: absolute;
  left: 0;
  top: 8vh;
  width: 100vw;
}
.edit-profile-cont {
  width: 80vw;
  margin: 40px auto;
}
.edit-profile .nav {
  width: 100%;
  border-bottom: 0.5px solid #fc559bfa;
}
.edit-profile .nav-link {
  color: #141414;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
}
.edit-profile .nav-pills .nav-link.active {
  background: none;
  color: #141414;
  font-weight: 500;
  border-bottom-left-radius: none !important;
  font-size: 16px;
  position: relative;
}
.edit-profile .nav-pills .nav-link.active::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.85px;
  width: 100%;
  height: 1px; /* or 100px */
  border-bottom: 3px solid #fc559b;
}

.edit-profile .nav-link {
  border-radius: 0px !important;
}
</style>