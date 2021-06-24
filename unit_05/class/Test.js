class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

let test = new Test();
test.a = 'Alex';

console.log(test.a);
console.log(test);