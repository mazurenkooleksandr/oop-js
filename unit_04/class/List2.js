class List2 extends List {
    constructor(item, cssClass) {
        super(item);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        return ul.classList.add(this.cssClass);
    }
}

let list2 = new List2(['one', 'two', 'three', 'four'], 'classStyles');
list2.render();