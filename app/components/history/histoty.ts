export enum Attributes2 {
    
    photo = 'photo',
    username = 'username',
    
}

class MyHistory extends HTMLElement {
    photo?:string;
    username?:string;

    static get observedAttributes() {
        const attri: Record<Attributes2, null> = {photo: null, username: null};
        return Object.keys(attri);
    }

    attributeChangedCallback(propName: Attributes2, _: string, newValue: string | undefined) {
        switch (propName) {
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
            <link rel="stylesheet" href="./components/history/style.css">
            <section id="template2">

            <img id="like" src="./assets/like.png">
            <img id="comment" src="./assets/comment.png">
            <img id="message" src="./assets/message.png">
            
            <h1 id="photo">${this.photo}</h1>
            <h1 id="username">${this.username}</h1>
            </section>
            `;
        }
    }
}

customElements.define('my-history', MyHistory);

export default MyHistory;