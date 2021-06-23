class ModernButton extends Button {
    constructor (width, height, background, value, borderRadius) {
        super (width, height, background, value);
        this.borderRadius = borderRadius;
    }

    render() {
       let button = super.render(); 
       button.style.borderRadius = this.borderRadius + 'px';
       return button;
    }
}

let simpleButtonModern = new ModernButton (100, 50, 'green', 'click', 20);
simpleButtonModern.render();