//interface adalah blueprint untuk sebuah kelas, jadi ketika implement harus menyertakan properti yang ada
//beda dengan abstract , abstract lebih ke class paling abstract dengan method method yang nantinya akan di turunkan ke class lainnya

interface Laptop {
    name: string,
    on(): void,
    off(): void
}

class Asus implements Laptop {
    name: string;
    isGaming : boolean
    constructor(name:string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming
    }
    on(): void {
        console.log("nyala");
        
    }
    off(): void {
        console.log("mati");
        
    }
}

let asusROG = new Asus('ROG',true)

asusROG.on()
asusROG.off()