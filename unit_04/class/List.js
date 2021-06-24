class List {
    constructor(item) {
        this.item = item;
    }
    
    render() {
        let body = document.querySelector('body');
        let ul = document.createElement('ul');
        body.appendChild(ul);
        for (let i = 0; i < this.item.length; i++) {
            let li = document.createElement('li');
            li.innerHTML += this.item[i];
            ul.appendChild(li);
        }
        return ul;
    }
}

let list = new List(['one', 'two', 'three', 'four']);
list.render();