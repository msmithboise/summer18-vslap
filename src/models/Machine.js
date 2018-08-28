
export default class Machine {
    constructor(data) {
        this.balance = data.balance
        this.money = data.money
        this.foodItems = [{
            id: 'a1',
            img: 'https://target.scene7.com/is/image/Target/51591776?wid=400&hei=400&fmt=pjpeg',
            price: 1.25,
            quantity: 10
          }, {
            id: 'a2',
            img: 'https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg',
            price: 2.00,
            quantity: 1
          }, {
            id: 'a3',
            img: 'https://www.myamericanmarket.com/6109-large_default/mountain-dew-soda.jpg',
            price: .75,
            quantity: 15
          }],
          this.vended = true
         
        }

    

    addMoney(type) {
        if (this.money[type]) {
          this.balance += this.money[type]
        }
      }

      getChange(){
          this.balance += 0
      }

      buyItems(price) {
          this.balance -= this.foodItems[price]
      }
}
