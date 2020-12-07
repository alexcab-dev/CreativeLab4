<template>
  <div class="customer-log">
    <div class="message">
      <h1>{{ msg }}</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Credit Limit</th>
            <th scope="col">Annual Fee</th>
            <th scope="col">Late Fee</th>
            <th scope="col">APR</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in persons" :key="person.id">
            <td>{{ person.name }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.address }}</td>
            <td>{{ person.creditLimit }}</td>
            <td>{{ person.annualFee }}</td>
            <td>{{ person.lateFee }}</td>
            <td>{{ person.apr }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CustomerLog",
  data() {
    return {
      msg: "",
      customers: false,
      persons: [],
      databaseSize: 0,
    };
  },
  created() {
    this.getCustomers();
  },
  methods: {
    async getCustomers() {
      try {
        let response = await axios.get("/api/customers");
        this.persons = response.data;
        this.databaseSize = response.data.length;
        if (this.databaseSize === 0) this.msg = "No customers yet";
        else this.msg = "Customer List";
      } catch (error) {
        this.msg = "No customers yet";
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.table {
  background-color: rgba(110, 85, 223, 0.3) !important;
  border-style: solid;
  border: rgb(153, 142, 221);
  color: white;
}
.message {
  background-color: rgba(110, 85, 223, 0.3) !important;
  color: white;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  border: solid;
  border-radius: 15px;
}

.customer-log{
  text-align: center;
}
</style>
