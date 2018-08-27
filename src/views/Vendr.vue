<template>
  <div class="vendr container-fluid">
    <div class="row">
      <div class="col-sm-12">
    <h1>Hello, I am Vendr {{machine.name}}</h1>
    <h1>Your remaining balance is: ${{machine.balance}}</h1>
  </div>
</div>
    <div class="money row">
      <button v-for="(value, key) in machine.money" :key="key" @click="addMoney(key)">{{key}}</button>

    </div>
    <div class="get-change row">
      <button @click="getChange()">Get Change</button>
    </div>
<div class="items row">
    <img src="https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/0/00028400589284_0.jpg" alt="">

<img src="http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png" alt="">

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

<style>

h1{
  display: flex;
  justify-content: center;
}


.items{
    display: flex;
    justify-content: center;
    
    
    
}

.get-change{
    display: flex;
    justify-content: center;
    
    
    
}

.money{
  display: flex;
  justify-content: center;
}
</style>