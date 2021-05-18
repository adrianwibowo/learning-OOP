import Laptop from "./BaseLaptop";


class Macbook<T> extends Laptop<T> {

        constructor(type: T, Numeric: boolean,  TouchButton: boolean) {
            super("Macbook",type,Numeric, TouchButton)
        }
}

export default Macbook;