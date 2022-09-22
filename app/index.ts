import data from './components/data.js';
import MyProfile, { Attributes } from './components/profile/profile.js';
//import MyHistory, { Attributes2 } from './components/history/histoty.js';

import myHistory from './components/history/histoty.js';
//import  from './components/history/histoty.js'; './components/profile/profile.js';
class AppContainer extends HTMLElement {

    myProfile: MyProfile[] = [];
    myHistory: myHistory[] = [];
    //MyProfile: MyProfile[] = [];
    //MyProfile: MyProfile[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        data.forEach((user)=>{
            const itemsProfile = this.ownerDocument.createElement('my-profile') as MyProfile;
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
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = '';

            this.myProfile.forEach((profile)=> {
                this.shadowRoot?.appendChild(profile);
            });
        }
        
    }
}

customElements.define('app-container', AppContainer);
