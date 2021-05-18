function getData(value:any) {
    return value
}

console.log(getData("adrian"));
console.log(getData(12345)); //akan eror jika dikasih length karna number gabisa

//maka ada namanya generic
function myData<T>(v:T) {
    return v
}

console.log(myData("adrian"));
console.log(myData(12345)); //dengan generic type maka setiap input ke fungsi akan di evaluasi untuk method selanjutnya seperti length hanya untuk array dan string, tostring hanya untuk number dll

const genArrow = <T>(v:T) => {
    return v
}


class List <T> {  //generic class

    private data: T[] //generik array , private method harus di masukan ke constructor atau diberi initial value
    constructor(...elements: T[]) { // ... adalah rest parameter karena nantinya akan menerima array maka lebih baik pakai rest parameneter agar saat memasukan argumen tidak perlu square bracket
        this.data = elements;
    }

    add(element: T ): void { // method untuk add ke array dengan value single maka pakai element dengan generic T bukan ...elements denagn generic T[]
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data;
    }
}


let number = new List<number>(1,2,3) // disini kita bisa definisikan type generic tadi akan menjadi type apa, sehinggga class menjadi fleksibel
number.add(23)
number.addMultiple(6,6,7)
console.log(number.getAll())

let randomList = new List<number | string>(1,"a","ashjdas", 2) // bisa dua type sekaliguss
randomList.add("ahay")
randomList.addMultiple(6,"ahui",7)
console.log(randomList.getAll())
