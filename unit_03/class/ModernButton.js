class ModernButton extends Button {
    constructor (width, height, background, value, borderRadius) {
        super (width, height, background, value);
        this.borderRadius = borderRadius;
    }

    render() {
       console.log(super.render()); 
       //button.style.borderRadius = this.borderRadius + 'px';
    }
}

let simpleButtonModern = new ModernButton (100, 50, 'green', 'click', 20);
simpleButtonModern.render();