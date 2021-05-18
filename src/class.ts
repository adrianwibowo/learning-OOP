
export class Car {
    constructor(public name:string){
        this.name = name;
    }
}

const mistubisi = new Car("mitsubisi")
console.log(mistubisi.name);



export class User {
    public name: string
    
    constructor(name:string, public age: number){
        this.name = name;
    }

    setName(value: string) {
        this.name = value;
    }
    getName = ():string => {
        return this.name
    }
}

let user = new User("adrian", 21) //Instansiate


console.log(user.name);


//public = bisa diakses di semua class /dari luar class
//protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri

class Admin extends User { // Inheritance
    read: boolean = true;
    write: boolean = true
    phone: string;
    private _email: string = '';
    static getRoleName: string = "admin bro"// bisa diakses tanpa instansiate


    constructor (phone: string, name: string, age: number){
        super(name, age)
        this.phone = phone
    }

    getRole(): {read: boolean, write: boolean}{
        return{
            read: this.read,
            write: this.write
        };
    };

    set email(value: string) { // gabisa return apaapa makanya gabisa di kasih void atau type lain setelah invoke, biasanya buat private senhingga gabisa diakses
        if(value.length < 5)  console.warn( "email kurang") //setter bisa juga buat validasi
        else{this._email = value}
    }

    get email():string {
        return this._email
    }
}

let admin = new Admin("0192830712","Tony", 21)

admin.getName();
admin.getRole();
admin.setName("wibowo");
admin.phone;

//setter getter
admin.email="a@.m"
console.log(admin.email);
// admin._email gagal karna private properti

//static method bisa diakses tanpa instansiate
console.log(Admin.getRoleName)