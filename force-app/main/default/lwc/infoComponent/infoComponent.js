import { api, LightningElement } from 'lwc';

export default class InfoComponent extends LightningElement {
    @api baseurl;

    get baseURL() {
        return this.baseurl;
    }
}