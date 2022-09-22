import data from './components/data.js';
import { Attributes } from './components/profile/profile.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.myProfile = [];
        this.myHistory = [];
        this.attachShadow({ mode: 'open' });
        data.forEach((user) => {
            const itemsProfile = this.ownerDocument.createElement('my-profile');
            itemsProfile.setAttribute(Attributes.image, user.image);
            itemsProfile.setAttribute(Attributes.peoplelikes, user.peoplelikes);
            itemsProfile.setAttribute(Attributes.location, user.location);
            itemsProfile.setAttribute(Attributes.personaluser, user.personaluser);
            itemsProfile.setAttribute(Attributes.publiccoments, user.publiccoments);
            this.myProfile.push(itemsProfile);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            this.myProfile.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define('app-container', AppContainer);
