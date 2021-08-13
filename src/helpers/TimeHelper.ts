import moment from "moment";

export default class TimeHelper {
    static get currentTime(): number {
        return moment().toDate().getTime();
    }
}