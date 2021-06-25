class Validate {
    constructor(a) {
        this.a = a;
    }

    static isNumber(a) {
        if (typeof a == 'number') {
            return true;
        }
        else {
            return false;
        }
    }

    static isInt(a) {
        if (Number.isInteger(a)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isFloat(a) {
        if (!Number.isInteger(a)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isChar(b) {
        if (b.length == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    static isString(b) {
        if (typeof b == 'string') {
            return true;
        }
        else {
            return false;
        }
    }

    static isBoolean(a) {
        if (a == true) {
            return true;
        }
        else {
            return false;
        }
    }

    static isArray(a) {
        if (Array.isArray(a)) {
            return true;
        }
        else {
            return false;
        }
    }

    static toMoney(a) {
        let y = a.toString();
        let out = '';
        for (let i = 0; i < y.length; i++) {
            out += y[i];
            if (i == y.length - 1) {
                out += '.00';
            } else if ((i + 1) % 3 == 0) {
                out += ' ';
            }
        }
        return out;
    }
}


console.log(Validate.isNumber(115));
console.log(Validate.isInt(115000));
console.log(Validate.isFloat(115000));
console.log(Validate.isChar(115000));
console.log(Validate.isString('115000'));
console.log(Validate.isBoolean(4>3));
console.log(Validate.isArray([115000]));
console.log(Validate.toMoney(200000));
