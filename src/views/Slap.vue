<template>
  <div class="home">
    <h1 :class="{green: !dead, red: dead}">
      {{target.name}}
      {{target.health}}
      {{target.items}}
    </h1>
    <div class="attacks">
      <button 
      v-for="(value, key) in target.attacks"
      :key="key"
      @click="attack(key)"
      :disabled="dead"
      >{{key}}</button>
      <button @click="reset" v-if="dead">Reset</button>
    </div>
    <div class="items">
      <button class="item" 
      v-for="item in availableItems" 
      :key="item.id"
      @click="giveItem(item)"
      >{{item.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      availableItems: [
        {
          id: 1,
          name: "Shield",
          modifier: 0.2
        }
      ]
    };
  },
  methods: {
    attack(attackType) {
      this.$store.dispatch("attack", attackType);
    },
    reset() {
      this.target.health = 100;
    },
    giveItem(item) {
      if (this.target.items.includes(item)) {
        return;
      }
      this.target.items.push(item);
    },

 



  },
  computed: {
    target() {
      return this.$store.state.target;
    },
    dead() {
      return this.target.health <= 0;
    }
  }
};
</script>

<style>
.red {
  background-color: red;
  color: white;
}
.green {
  background-color: green;
  color: white;
}
</style>

