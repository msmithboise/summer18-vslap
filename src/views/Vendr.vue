<template>
  <div class="vendr">
    <h1>Hello, I am Vendr {{machine.name}}</h1>
    <h1>Your remaining balance is: ${{machine.balance}}</h1>

    <div class="money">
      <button v-for="(value, key) in machine.money" :key="key" @click="addMoney(key)">{{key}}</button>

    </div>
    <div class="get-change">
      <button @click="getChange()">Get Change</button>
    </div>
  </div>




</template>

<script>
  export default {
    methods: {
      addMoney(add) {
        this.$store.dispatch("addMoney", add);
      },

      getChange(subtract) {
        this.$store.dispatch("getChange", subtract);
      }


    },
    computed: {
      machine() {
        return this.$store.state.machine;
      }
    }
  };
</script>