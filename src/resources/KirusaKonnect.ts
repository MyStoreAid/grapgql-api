import axios from 'axios';
import { SMSconfig } from '../../config/kirusakonnect';

export default class KirusaKonnect {
  contact: String;
  id: String | undefined;
  sender_mask: String | undefined;
  message: String;
  token: String | undefined;
  url: string;

  constructor(contact: String, message: String) {
    const {accountId, senderMask, id, apiToken} = SMSconfig;
    this.id = id;
    this.sender_mask = senderMask;
    this.contact = `233${contact}`;
    this.message = message;
    this.token = apiToken;
    this.url = `https://konnect.kirusa.com/api/v1/Accounts/${accountId}/Messages`;
  }

  async sendSms() {
    const contact = this.contact.replace(/-/g, '');
    const params = {
      id: this.id,
      to: [contact],
      body: this.message,
      priority: 'high',
      sender_mask: this.sender_mask,
    };

    /*
    const headers =  {
      "Authorization" : this.token,
    };
    */

    return axios.post(this.url, params, {
      headers: {
        Authorization: this.token,
      },
    });
  }
}