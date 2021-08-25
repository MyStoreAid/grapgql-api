import axios from 'axios';
import { SMSconfig }  from '../../config/Arkesel';

export default class Arkesel {
    contact: String | undefined;
    url: string;

    constructor(contact: String, message: String) {
        const {apiKey} = SMSconfig;
        let updatedContact = contact;
        if (updatedContact[0] === '0') {
            updatedContact = contact.slice(1, contact.length);
            this.contact = `+233${updatedContact}`.replace(/-/g, '');
        }
        this.url = `https://sms.arkesel.com/sms/api?action=send-sms&api_key=${apiKey}&to=${updatedContact}&from=MyStoreAid&sms=${message}`;
    }

    async sendSms() {
        return axios.get(this.url);
    }
}