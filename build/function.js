"use strict";
//jika function setelah invoke ada type data maka keluaran dari func tersebut harus sesuai
function getName(params) {
    return "halo aku string " + params;
}
console.log(getName('hehe'));
//void tidak mereturn apapun
function getapa() {
    console.log("Ini Func Void");
}
getapa();
function multiply(a, b) {
    return console.log(a * b);
}
multiply(10, 2);
let age = 10;
const Add = (a, b) => {
    return a * b;
};
//optional fungsion dimana parameter di tambah "?" tapi kusus di string kalo number gabisa. jadi nanti tujuannya bisa ga ngisi params ke 2 dan memunculkan undefined selama fungsinya mereturn string
const getSetring = (a, b) => {
    return a + " " + b;
};
console.log(getSetring("a"));
