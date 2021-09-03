import Model from "../../models/Model";
 
export default class FeatureModel extends Model {

    static get table() {
        return this.connection.features;
    }
    
}