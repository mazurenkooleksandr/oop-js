class Test3 extends Test2 {
    set testProp2(a) {
        super.testProp();
    }

    setTestProp() {
        super.setTestProp();
    }

    get testProp2() {
        return super.testProp();
    }
}

const test3 = new Test3();
console.log(test3.testProp = 'ccc'); 
console.log(test3);
console.log(test3.testProp = ''); 
console.log(test3);
console.log(test3.setTestProp('')); 
console.log(test3);
console.log(test3.testProp);