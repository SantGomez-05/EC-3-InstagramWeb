export enum Attributes {
    image = 'image',
    peoplelikes = 'peoplelikes',
    location = 'location',
    personaluser = 'personaluser',
    publiccoments = 'publiccoments',
}

class MyProfile extends HTMLElement {
    image?:string;
    peoplelikes?:number;
    location?:string;
    personaluser?:string;
    publiccoments?:string;


    static get observedAttributes() {
        const attri: Record<Attributes, null> = {image: null, peoplelikes: null, location: null, personaluser:null, publiccoments:null};
        return Object.keys(attri);
    }

    attributeChangedCallback(propName: Attributes, _: string, newValue: string | undefined) {
        switch (propName) {
        case Attributes.peoplelikes:
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
            <link rel="stylesheet" href="./components/profile/style.css">
            <section id="template">

            <img id="like" src="./assets/like.png">
            <img id="comment" src="./assets/comment.png">
            <img id="message" src="./assets/message.png">
            <img id="profile" src="./assets/profile.png">
            <img id="puntos-ubicacion-imagen" src="./assets/puntos-ubicacion-imagen.jpeg">
            <img id="puntos-opciones" src="./assets/puntos-opciones.jpeg">
            <img id="save" src="./assets/save.jpeg">

            <img id="image"src="${this.image}"></img>
            <h1 id="peoplelikes">${this.peoplelikes}</h1>
            <h1 id="location">${this.location}</h1>
            <h1 id="personaluser">${this.personaluser}</h1>
            <h1 id="publiccoments">${this.publiccoments}</h1>
            </section>
            `;
        }
    }
}

customElements.define('my-profile', MyProfile);

export default MyProfile;