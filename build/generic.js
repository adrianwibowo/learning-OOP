"use strict";
function getData(value) {
    return value;
}
console.log(getData("adrian"));
console.log(getData(12345)); //akan eror jika dikasih length karna number gabisa
//maka ada namanya generic
function myData(v) {
    return v;
}
console.log(myData("adrian"));
console.log(myData(12345)); //dengan generic type maka setiap input ke fungsi akan di evaluasi untuk method selanjutnya seperti length hanya untuk array dan string, tostring hanya untuk number dll
const genArrow = (v) => {
    return v;
};
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let number = new List(1, 2, 3); // disini kita bisa definisikan type generic tadi akan menjadi type apa, sehinggga class menjadi fleksibel
number.add(23);
number.addMultiple(6, 6, 7);
console.log(number.getAll());
let randomList = new List(1, "a", "ashjdas", 2); // bisa dua type sekaliguss
randomList.add("ahay");
randomList.addMultiple(6, "ahui", 7);
console.log(randomList.getAll());
