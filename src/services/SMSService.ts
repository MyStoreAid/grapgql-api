import { AxiosResponse } from 'axios';
import { logger } from '../../config/logger'
import Arkesel from '../resources/Arkesel';
import KirusaKonnect from '../resources/KirusaKonnect';
import TxtConnect from '../resources/TxtConnect';

export default class SMSService {
  contact: String;
  message: String;
  sentSMS: AxiosResponse<any> | {status: number, otp: String};
  constructor(contact: String, message: String) {

    this.contact = contact.replace(/-/g, '');
    this.message = message;
    this.sentSMS =  {status: 0 , otp: ""};
  }

  async _sendByArkesel() {
    this.sentSMS = await new Arkesel(this.contact, this.message).sendSms();
    if (this.sentSMS && this.sentSMS.status === 200) {
      logger.info(`Successfully send message to ${this.contact} using Arkesel`);
    }
  }

  async _sendByKirusa() {
    this.sentSMS = await new KirusaKonnect(this.contact, this.message).sendSms();
    if (this.sentSMS && this.sentSMS.status === 200) {
      logger.info(`Successfully send message to ${this.contact} using Kirusa`);
    }
  }

  async _sendByTxtConnect() {
    this.sentSMS = await new TxtConnect(this.contact, this.message).sendSms();
    if (this.sentSMS && this.sentSMS.status === 200) {
      logger.info(`Successfully send message to ${this.contact} using TxtConnect`);
    }
  }

  async sendMessage(): Promise<boolean> {
    try {      
      if (process.env.NODE_ENV === 'test') {
        return true;
        this.sentSMS = {status: 200, otp: '8989'};
      } else {
        try {
          await this._sendByArkesel();
          if (this.sentSMS && this.sentSMS.status !== 200) {
            await this._sendByTxtConnect()
          }
        } catch(err) {
          logger.error(err);
          await this._sendByTxtConnect();
        }
        if (this.sentSMS && this.sentSMS.status !== 200) {
          await this._sendByKirusa();
        }
      }
      return this.sentSMS && this.sentSMS.status === 200;
    } catch (err) {
      logger.error(err);
      return false;
    }
  }
}