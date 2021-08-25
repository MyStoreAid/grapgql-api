import axios from 'axios';
import { SMSconfig } from '../../config/TxtConnect';

export default class TxtConnect {
    contact: String;
    message: String;
    token: String | undefined;
    sender: String | undefined;
    url: string;

    constructor(contact: String, message: String) {
        const {token, sender} = SMSconfig;
        let updatedContact = contact;
        if (updatedContact[0] === '0') {
            updatedContact = contact.slice(1, contact.length);
        }
        this.contact = `+233${updatedContact}`;
        this.message = message;
        this.token = token;
        this.url = `https://www.txtconnect.co/v2/app/api/send/sms.json`;
        this.sender = sender;
    }

    async sendSms() {
        const contact = this.contact.replace(/-/g, '');

        const params = {
            token: this.token,
            message: this.message,
            sender: this.sender,
            recipients: contact,
        };

        return axios.post(this.url, params);
    }
}