<template>
  <div class="application">
    <CustomerLog />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerLog from "@/components/CustomerLog.vue";

export default {
  name: "Home",
  components: {
    CustomerLog,
  },
};
</script>