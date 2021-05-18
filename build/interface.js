"use strict";
//interface adalah blueprint untuk sebuah kelas, jadi ketika implement harus menyertakan properti yang ada
//beda dengan abstract , abstract lebih ke class paling abstract dengan method method yang nantinya akan di turunkan ke class lainnya
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let asusROG = new Asus('ROG', true);
asusROG.on();
asusROG.off();
