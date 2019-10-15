<template>
  <div class="step-four flex-column align-items-center mt-4">
    <h1>Card Verification</h1>
    <p class="about-you">How do you currently make money?</p>
    <h1 class="pt-3">Great! Add your Card Details.</h1>
    <p class="text-center ts">
      To validate your card, a non - refundable charge of N100
      needs to be processed to verify your card.
    </p>
    <p class="issues-text ts py-2">
      Having issues adding your card? please
      <router-link to="/contact">contact us</router-link>&nbsp; right away
    </p>
    <div v-if="!cardDetails">
      <input
        placeholder="Enter Your account Number"
        class="w-100 mb-3 p-2"
        type="text"
        name
        id
        v-model="bankD.accountNumber"
      />
      <select class="w-100 p-2 mb-3" v-model="bankD.bankCode" name id>
        <option selected disabled value>Select Bank</option>
        <option :key="bank.code" v-for="bank in bankDetails" :value="bank.code">{{bank.name}}</option>
      </select>
      <button @click="submit()" class="add-card-btn mb-4 w-100 p-1">Submit</button>
    </div>

    <button v-if="cardDetails" @click="payWithPaystack()" class="add-card-btn mb-4">Add Card</button>
    <img src="@/assets/images/paystack.svg" alt />
  </div>
</template>

<script>
import { functions } from "../../src/firebase";
import db from "../../src/firebase";
import firebase from "firebase";
export default {
  data() {
    return {
      key: "pk_test_919aee1b143dc3ff408b56cd722e3157ed237799",
      reference: null,
      finalData: null,
      bankDetails: [],
      cardDetails: false,
      bankD: {
        bankCode: "",
        accountNumber: "",
        bank: ""
      }
    };
  },
  watch: {
    "bankD.bankCode": {
      handler() {
        let k = this.bankDetails.find(x => {
          return x.code === this.bankD.bankCode;
        });
        this.bankD.bank = k.name;
      },
      deep: true
    },
    reference(x) {
      const Paystack_Verify_Transaction = functions.httpsCallable(
        "Paystack_Verify_Transaction"
      );
      Paystack_Verify_Transaction(x).then(data => console.log(data));
    }
  },
  computed: {
    scriptLoaded() {
      return new Promise(resolve => {
        this.loadScript(() => {
          resolve();
        });
      });
    }
  },
  methods: {
    async submit() {
      await db
        .collection("users")
        .doc(this.$store.state.refId)
        .collection("finance")
        .doc("bank_details")
        .set(this.bankD);
      this.cardDetails = true;
    },
    loadScript(callback) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      if (script.readyState) {
        script.onreadystatechange = () => {
          if (
            script.readyState === "loaded" ||
            script.readyState === "complete"
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = () => {
          callback();
        };
      }
    },
    async storeData() {
      await db
        .collection("users")
        .where("userID", "==", this.$store.state.userId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            db.collection("users")
              .doc(doc.id)
              .update(this.finalData);
          });
        });
    },
    async payWithPaystack() {
      this.scriptLoaded.then(() => {
        const paystackOptions = {
          key: this.key,
          email: this.$store.state.user.email,
          amount: 10000,
          callback: response => {
            this.reference = response.reference;
            if (response.message === "Approved") {
              this.storeData();
              var user = firebase.auth().currentUser;
              const userToken = user.ma;

              if (userToken) {
                localStorage.setItem("shecludedtoken", userToken);
                this.$router.push("/dashboard");
              }
            }
          },
          onClose: () => {
            this.close();
          },
          metadata: null,
          currency: this.currency
          // bearer: this.payObj.bearer
        };
        if (this.embed) {
          paystackOptions.container = "paystackEmbedContainer";
        }
        const handler = window.PaystackPop.setup(paystackOptions);
        if (!this.embed) {
          handler.openIframe();
        }
      });
    }
  },
  mounted() {
    this.finalData = this.$store.state.Data;
    console.log(this.finalData);
    const List_Banks = functions.httpsCallable("List_Banks");
    List_Banks().then(data => {
      this.bankDetails = data.data.data;
    });
  }
};
</script>

<style>
.step-four {
  width: 40%;
}
.step-four h1:first-child {
  color: #fc559b;
  font-size: 35px;
  font-weight: bold;
}
.step-four .ts {
  font-weight: 100;
  font-size: 18px;
}
.step-four a {
  color: #ced0c5;
  text-decoration: none;
}
.add-card-btn {
  background: #fc559b;
  border: 0.75px solid rgba(20, 20, 20, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
  width: 18vw;
  height: 7vh;
  font-weight: 100;
  font-size: 12px;
}
</style>