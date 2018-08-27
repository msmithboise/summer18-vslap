
export default class Machine {
    constructor(data) {
        this.balance = data.balance
        this.money = data.money

    }

    addMoney(type) {
        if (this.money[type]) {
          this.balance += this.money[type]
        }
      }

      getChange(){
          this.balance += 0
      }
}
