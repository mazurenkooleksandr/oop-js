class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }


    render() {
        let body = document.querySelector('body');
        let button = document.createElement('button');
        button.style.width = this.width + 'px';
        button.style.height = this.height + 'px';
        button.style.background = this.background;
        button.textContent = this.value;
        return body.appendChild(button);
    }
}

let simpleButton = new Button (194.4, 70.2, 'red', 'click');
simpleButton.render();