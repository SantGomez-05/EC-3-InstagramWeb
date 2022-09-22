export var Attributes3;
(function (Attributes3) {
    Attributes3["image"] = "image";
    Attributes3["peoplelikes"] = "peoplelikes";
    Attributes3["location"] = "location";
    Attributes3["personaluser"] = "personaluser";
    Attributes3["publiccoments"] = "publiccoments";
})(Attributes3 || (Attributes3 = {}));
class MySuggestion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes3() {
        const attri = { image: null, peoplelikes: null, location: null, personaluser: null, publiccoments: null };
        return Object.keys(attri);
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attributes3.peoplelikes:
                this.peoplelikes = newValue ? Number(newValue) : 0;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            ${this.image}
            ${this.peoplelikes}
       
            `;
        }
    }
}
customElements.define('my-profile', MySuggestion);
export default MySuggestion;
