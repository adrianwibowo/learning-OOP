
//jika function setelah invoke ada type data maka keluaran dari func tersebut harus sesuai
function getName(params:string):string {
    return "halo aku string " +params
}
console.log(getName('hehe'))

//void tidak mereturn apapun
function getapa():void {
    console.log("Ini Func Void")
}
getapa()


function multiply(a:number, b:number) {
    return console.log(a * b);
     
}
multiply(10,2)

//function jadi tipe data
type Age = number
let age: Age = 10

type Tambah = (a:number, b:number) => number;
const Add: Tambah =  (a:number, b:number):number => {
    return a*b;
}


//optional fungsion dimana parameter di tambah "?" tapi kusus di string kalo number gabisa. jadi nanti tujuannya bisa ga ngisi params ke 2 dan memunculkan undefined selama fungsinya mereturn string
const getSetring = (a:string, b?:string):string => {
    return a+ " " +b
}

console.log(getSetring("a"))