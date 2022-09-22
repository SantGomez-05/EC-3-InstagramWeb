export enum Attributes3 {
    image = 'image',
    peoplelikes = 'peoplelikes',
    location = 'location',
    personaluser = 'personaluser',
    publiccoments = 'publiccoments',
}

class MySuggestion extends HTMLElement {
    image?:string;
    peoplelikes?:number;
    location?:string;
    personaluser?:string;
    publiccoments?:string;


    static get observedAttributes3() {
        const attri: Record<Attributes3, null> = {image: null, peoplelikes: null, location: null, personaluser:null, publiccoments:null};
        return Object.keys(attri);
    }

    attributeChangedCallback(propName: Attributes3, _: string, newValue: string | undefined) {
        switch (propName) {
        case Attributes3.peoplelikes:
            this.peoplelikes = newValue? Number(newValue) : 0;
            break;

        default:

            this[propName] = newValue;
            break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow ({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            ${this.image}
            ${this.peoplelikes}
       
            `;
        }
    }
}

customElements.define('my-profile', MySuggestion);

export default MySuggestion;