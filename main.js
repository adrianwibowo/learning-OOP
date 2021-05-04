class Car {

  _color
  _ban
  _engine
  _suara
  _klakson
  _engineStartUp

  constructor() {
    if (this.constructor === Car) return console.error(new Error('ngga bosa'))
    this._ban = 4
    this._engineStartUp = false

    // this.encap = "adasd";
    var encap;
  }

  
  set warna(war) {
    return this._color = war
  }

  get warna() {
    return this._color
  }

  set merek(mer) {
    return this._merek = mer
  }

  get encaps () {
    return this.encap 
  }

  suara() {
    if (this._engineStartUp) console.log(this._suara)
    else this.warning('nyalanakn mesin dulu')
  }

  startUpengine() {
    return this._engineStartUp = true
  }

  warning(message) {
    console.log(message)
  }

  klakson() {
    console.log(this._klakson)
  }
}

class Toyota extends Car {
  constructor(warna, engine) {
    super()
    this._color = warna
    this._engine = engine
    this._suara = 'toyotaaaaa'
    this._klakson = 'tin'
  }
}

class Honda extends Car {

  constructor(warna, engine) {
    super()
    this._color = warna
    this._engine = engine
    this._suara = 'hondaaaaaaaa'
    this._klakson = 'ton'
  }

  klakson() {
    super.klakson()
    super.suara()
  }

  suara() {
    console.log(this._suara)
  }
}

const avanza = new Toyota('hitam', 1500)
const brio = new Honda('biru', 1300)

Toyota.prototype.service = () => {
  console.log('waktunya service')
}

avanza.klakson()
brio.klakson()
console.log(brio.encaps)
// avanza.startUpengine()
// avanza.suara()
// Toyota.service()
// brio.suara()

const car = new Car
// console.log(car)

// car.merek = 'toyota'
// car.suara()

// let data = [
//   {
//     nama: 'ads',
//     umur: 23
//   }, {
//     nama: 'ads',
//     umur: 23
//   }, {
//     nama: 'ads',
//     umur: 23,
//     hoby: {
//       pagi: ['ngopi', 'berenang'],
//       siang: ['tidur']
//     }
//   }, {
//     nama: 'ads',
//     umur: 23
//   }
// ]

// console.table(data)
// console.log(data)
