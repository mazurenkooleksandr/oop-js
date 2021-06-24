class Test4 extends Test2 {
    set testProp(a) {
        this._testProp = a*10;
    }

    get testProp() {
        if (this._testProp > 100) {
            return this._testProp;
        } else {
            return false;
        }
    }
}

const test4 = new Test4();
console.log(test4.testProp = 4); 
console.log(test4); 
console.log(test4.testProp);
console.log(test4);