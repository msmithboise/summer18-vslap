import Vue from 'vue'
import Vuex from 'vuex'
import Target from './models/Target';
import Machine from './models/Machine';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: new Target({
      health: 100,
      name: "ScarCrow",
      attacks: {
        kick: 10,
        slap: 1,
        punch: 5,
        haduouken: 100
      },
      items: []
    }),
    machine: new Machine({
      name: "Vendr",
      balance: 0,
      money: {
        "5¢": .05,
        "10¢": 0.10,
        "25¢": 0.25,
      },
    
      
      

    })
  },
  mutations: {
    setHealth(state, actualHealth) {
      state.target.health = actualHealth
    },

    setBalance(state, actualBalance) {
      state.machine.balance = actualBalance

    },

    getChange(state){
      state.machine.balance = 0
    }


  },


  actions: {
    attack({ dispatch, commit, state }, payload) {
      //async call
      let newHealth = state.target.health - state.target.attacks[payload]
      commit('setHealth', newHealth)
    },

    addMoney({ dispatch, commit, state }, moneyType) {
      let newBalance = state.machine.balance + state.machine.money[moneyType]
      Math.floor(newBalance)

      commit('setBalance', newBalance)
  },

    getChange({dispatch, commit, state}, payload) {
      let change = state.machine.balance + state.machine.balance[payload]
      commit('getChange', change)
    },

    buyItems({dispatch, commit, state}, payload) {
      if(state.machine.balance - payload.price >= 0){
        let newBalance = state.machine.balance - payload.price 
        commit('setBalance', newBalance)
        state.machine.vended = true
      }else {
        state.machine.vended = false
      }

    }



  }
})


  
