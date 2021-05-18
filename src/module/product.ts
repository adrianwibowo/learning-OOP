import Asus from "./asus";
import Macbook from "./macbook";


let AsusZenbook = new Asus("ROG",true,true)
console.log(AsusZenbook)

let MacbookAir =  new Macbook<number>(2021,false,false)
console.log(MacbookAir);
MacbookAir.a()
