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
      <button @click="getChange()">Get Change</button>

    </div>
    <div class="get-change row">
      <div class="items col-sm-4">
          <img :src="machine.foodItems[0].img">
          <img :src="machine.foodItems[1].img">
          <img :src="machine.foodItems[2].img">
        </div>
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
        this.$store.dispatch("buyItems", item)
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
    height:  400px;
    width: 50px;
    
    
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