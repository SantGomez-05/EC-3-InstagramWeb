export var Attributes2;
(function (Attributes2) {
    Attributes2["photo"] = "photo";
    Attributes2["username"] = "username";
})(Attributes2 || (Attributes2 = {}));
class MyHistory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attri = { photo: null, username: null };
        return Object.keys(attri);
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
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
