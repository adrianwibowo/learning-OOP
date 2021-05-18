"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Car = void 0;
class Car {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
exports.Car = Car;
const mistubisi = new Car("mitsubisi");
console.log(mistubisi.name);
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
let user = new User("adrian", 21); //Instansiate
console.log(user.name);
//public = bisa diakses di semua class /dari luar class
//protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = '';
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        if (value.length < 5)
            console.warn("email kurang"); //setter bisa juga buat validasi
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "admin bro"; // bisa diakses tanpa instansiate
let admin = new Admin("0192830712", "Tony", 21);
admin.getName();
admin.getRole();
admin.setName("wibowo");
admin.phone;
//setter getter
admin.email = "a@.m";
console.log(admin.email);
// admin._email gagal karna private properti
//static method bisa diakses tanpa instansiate
console.log(Admin.getRoleName);
