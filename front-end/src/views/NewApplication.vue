<template>
  <div class="wrapper">
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">New Customer Details</h1>
          <p class="lead">
            Enter caller's info and preferred credit card parameters
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <form>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">Name</label>
              <input
                v-model="name"
                placeholder="Name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">Address</label>
              <input
                v-model="address"
                placeholder="address"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">Phone</label>
              <input
                v-model="phone"
                placeholder="Phone"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">Credit Limit</label>
              <input
                v-model="creditLimit"
                placeholder="Credit Limit"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">Annual Fee</label>
              <input
                v-model="annualFee"
                placeholder="Annual Fee"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">Late Fee</label>
              <input
                v-model="annualFee"
                placeholder="Annual Fee"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group shadow-sm p-3 mb-5 bg-white rounded">
              <label for="exampleInputEmail1">APR</label>
              <input
                v-model="apr"
                placeholder="APR"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="col-sm">
        <div class="added alert alert-info" v-if="this.newApplicant">
          <p>{{ this.newApplicant.data.name }} has been added!</p>
        </div>
      </div>
      <div class="col-sm">
        <button class="btn btn-primary" @click="submitApplication()">
          Submit Application
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Apply",
  data() {
    return {
      newApplicant: null,
      name: "",
      address: "",
      phone: "",
      creditLimit: "",
      annualFee: "",
      lateFee: "",
      apr: "",
    };
  },
  methods: {
    async submitApplication() {
      try {
        this.newApplicant = await axios.post("/api/customers", {
          name: this.name,
          address: this.address,
          phone: this.phone,
          creditLimit: this.creditLimit,
          annualFee: this.annualFee,
          lateFee: this.lateFee,
          apr: this.apr,
        });
        console.log(this.newApplicant);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 10px;
  margin-top: 15px;
  background-color: rgba(110, 85, 223, 0.3) !important;
  border-style: solid;
  border: rgb(153, 142, 221);
}

.bg-white {
  background-color: rgba(110, 85, 223, 0.3) !important;
  border-style: solid;
  border: rgb(153, 142, 221);
}
h1, .lead, .form-group {
  color:white;
}
.added {
  color: black !important;
}
</style>