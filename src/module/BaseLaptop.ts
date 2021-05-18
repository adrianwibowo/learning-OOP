import ILaptop from "./interfaceLaptop";
import * as Keyboard from './keyboard'; //cara import 1 untuk file dengan export banyak dan tidak ada default
import { a, b } from './keyboard' //; //cara import 2 untuk file dengan export banyak dan tidak ada default



abstract class BaseLaptop<T> implements ILaptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;
    
    constructor(
        name: string, 
        type: T, 
        withNumeric: boolean, 
        withTouchButton: boolean)
        {
            this.name = name;
            this.type = type;
            this.withNumeric = withNumeric;
            this.withTouchButton = withTouchButton;
    }
    
    a() {
        console.log(Keyboard.a())
    }

    b() {
        console.log(b());
        
    }
}

export default BaseLaptop;