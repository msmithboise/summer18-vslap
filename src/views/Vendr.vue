<template>
  <div class="vendr container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <h1>Hello, I am Vendr {{machine.name}}</h1>
        <h1>Your remaining balance is: ${{machine.balance.toFixed(2)}}</h1>
        <h1 v-if="machine.vended == false">Insufficient Funds</h1>

      </div>
    </div>
    <div class="money row">
      <button v-for="(value, key) in machine.money" :key="key" @click="addMoney(key)">{{key}}</button>
      <button @click="getChange()">Get Change</button>

    </div>
    <div class="get-change row">
      <div class="items col-sm-4" v-for="item in machine.foodItems" :key="item.id">
        <img @click="buyItems(item)" :src="item.img">
      </div>
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
      },

      buyItems(item) {
        this.$store.dispatch("buyItems", item);
      }
    },
    computed: {
      machine() {
        return this.$store.state.machine;
      }
    }
  };
</script>

<style>
  h1 {
    display: flex;
    justify-content: center;
  }

  .items {
    display: flex;
    justify-content: center;
    height: 400px;
    width: 50px;
  }

  .get-change {
    display: flex;
    justify-content: center;
  }

  .money {
    display: flex;
    justify-content: center;
  }
</style>