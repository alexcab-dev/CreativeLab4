
<template>
  <div class="edit">
    <p></p>

    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4"><p>Choose Customer</p></h1>
          <p class="lead">
            Clicking on their button will open their account details
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg">
          <div class="name-select" v-for="person in persons" :key="person.id">
            <div class="person-name"></div>

            <button
              class="btn btn-primary"
              @click="
                toggleEdit();
                thisPerson(person);
              "
            >
              {{ person.name }}
            </button>
          </div>
        </div>
        <div class="col-lg">
          <div class="AccountDetails" v-if="this.edit">
            <div class="name">
              <p>Name:</p>
              <input v-model="customer.name" />
            </div>
            <div class="address">
              <p>Address:</p>
              <input v-model="customer.address" />
            </div>
            <div class="phone">
              <p>Phone:</p>
              <input v-model="customer.phone" />
            </div>
            <div class="creditLimit">
              <p>Credit Limit:</p>
              <input v-model="customer.creditLimit" />
            </div>
            <div class="lateFee">
              <p>Late Fee:</p>
              <input v-model="customer.lateFee" />
            </div>
            <div class="annualFee">
              <p>Annual Feee</p>
              <input v-model="customer.annualFee" />
            </div>
            <div class="apr">
              <p>Apr:</p>
              <input v-model="customer.apr" />
            </div>
          </div>
        </div>
        <div class="col-lg" v-if="this.edit">
          <div class="buttons">
            <p>Select Option:</p>
            <button class="btn btn-primary" @click="editPerson(customer)">
              Save Changes
            </button>
            <button class="btn btn-primary" @click="deletePerson(customer)">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "editor",
  data() {
    return {
      edit: false,
      customer: null,
      persons: [],
    };
  },
  created() {
    this.loadMongo();
  },
  methods: {
    async loadMongo() {
      try {
        let response = await axios.get("api/customers");
        this.persons = response.data;
        console.log(this.persons);
      } catch (error) {
        console.log(error);
      }
    },
    async deletePerson(person) {
      try {
        await axios.delete("/api/customers/" + person._id);
        this.loadMongo();
        this.toggleEdit();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editPerson(person) {
      try {
        await axios.put("/api/customers/" + person._id, {
          name: person.name,
          address: person.address,
          phone: person.phone,
          creditLimit: person.creditLimit,
          annualFee: person.annualFee,
          lateFee: person.lateFee,
          apr: person.apr,
        });
        this.loadMongo();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    toggleEdit() {
      if (this.edit) {
        this.edit = false;
      } else this.edit = true;

      console.log("toggler is called and edit is " + this.edit);
    },
    thisPerson(tempPerson) {
      this.customer = tempPerson;
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 13px;
  width: 200px;
  margin-right: 5px;
}
.col-lg {
  margin-bottom: 34px;
}
p {
  color: rgb(235, 236, 247);
}

.AccountDetails,
.name-select,
.buttons, .jumbotron {
  border: solid;
  background-color: rgba(110, 85, 223, 0.3) !important;
  border-style: solid;
  border: rgb(153, 142, 221);
  text-align: center;
}
</style>