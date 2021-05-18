import Laptop from "./BaseLaptop";


class Asus<T> extends Laptop<T> {

        constructor(type: T, withNumeric: boolean, withTouchButton: boolean) {
            super("Asus",type,withNumeric,withTouchButton)
        }
}

export default Asus;