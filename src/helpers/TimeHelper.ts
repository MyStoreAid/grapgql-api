import moment from "moment";

export default class TimeHelper {
    static get currentTime(): number {
        return moment().toDate().getTime();
    }

    static get currentDate(): string {
        return moment().format('MMMM Do YYYY, h:mm:ss a').toString();
    }
}