<template>
  <div class="edit-finance mt-5">
    <h2>Finance</h2>
    <div class="edit-finance-cont mt-4">
      <span class="bank-details">Bank details</span>
      <div class="d-flex justify-content-between w-100 mt-1 align-items-center">
        <span>Bank Name</span>
        <div class="edit-finance-area">
          <div class="mt-3 select-cont">
            <select class="select-area dropdown" name id>
              <option selected disabled value>Select Bank</option>
              <option value>First Bank</option>
              <option value>GT Bank</option>
              <option value>Fidelity</option>
            </select>
            <img src="@/assets/images/rectangle.svg" class="img-ico" alt />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span>Account Number</span>
        <div class="edit-finance-area">
          <input type="number" placeholder="Account Number" class="input-area" />
        </div>
      </div>
      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span>Add Bank Verification Number</span>
        <div class="edit-finance-area">
          <input type="number" placeholder="Bank Verification Number" class="input-area" />
        </div>
      </div>
      <div class="mt-5">
        <span class="bank-details">Card details</span>
        <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
          <span>Current Card</span>
          <div class="edit-finance-area d-flex">
            <input type="number" placeholder="Card Number" class="input-area mr-4" />
            <div class="minus-cont flex-center px-4">
              <img src="@/assets/images/minus.svg" alt />
            </div>
          </div>
        </div>
        <div class="mt-4 mb-4">
          <span class="bank-details ul">Add Card</span>
        </div>
      </div>

      <div class="d-flex justify-content-between w-100 mt-3 align-items-center">
        <span></span>
        <div class="edit-finance-area">
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
.edit-finance {
  background: #ffffff;
  border: 0.75px solid rgba(252, 85, 155, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 50px;
}
.edit-finance h2 {
  color: #141414;
  font-size: 25px;
  font-weight: 300;
}
.edit-finance-cont {
  width: 60vw;
}
.edit-finance span {
  font-size: 12px;
  color: #7d7d7d;
}
.edit-finance-area {
  width: 40vw;
}
.update-pic {
  color: #fc559b;
  padding-left: 30px;
  font-size: 14px;
  font-weight: 100;
}
.edit-finance .input-area {
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

.edit-finance .grid-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.edit-finance textarea {
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
.select-area {
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
  background: white;
}
.img-ico {
  position: absolute;
  right: 20px;
  padding-bottom: 10px;
  pointer-events: none;
}
.select-cont {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 20;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.bank-details {
  padding-left: 20vw;
  font-weight: 100;
}
.minus-cont {
  background: #ffffff;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
}
.ul {
  text-decoration: underline;
}
</style>