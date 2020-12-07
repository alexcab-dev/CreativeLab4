<template>
  <div class="customer-log">
    <p>{{ msg }}</p>
    <div class="display-all" v-if="modify">
      <div class="person" v-for="person in persons" :key="person.id">
        <div class="name">
          <p>{{ person.name }}</p>
        </div>
        <div class="phone">
          <p>Phone: {{ person.phone }}</p>
        </div>
        <div class="address">
          <p>Address: {{ person.address }}</p>
        </div>
        <div class="creditLimit">
          <p>Credit Limit: {{ person.creditLimit }}</p>
        </div>
        <div class="annualFee">
          <p>Annual Fee: {{ person.annualFee }}</p>
        </div>
        <div class="lateFee">
          <p>Late Fee: {{ person.lateFee }}</p>
        </div>
        <div class="apr">
          <p>APR: {{ person.apr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>