//Brands
import brand from './brands/queries/brand';
import brands from './brands/queries/brands';
import createBrand from './brands/mutations/createBrand';
import deleteBrand from './brands/mutations/deleteBrand';
import updateBrand from './brands/mutations/updateBrand';

//Client
import client from './clients/queries/client';
import clients from './clients/queries/clients';
import createClient from './clients/mutations/createClient';
import deleteClient from './clients/mutations/deleteClient';
import updateClient from './clients/mutations/updateClient';



//Internal Business Category
import internalBusinessCategory from './internalBusinessCategories/queries/internalBusinessCategory';
import internalBusinessCategories from './internalBusinessCategories/queries/internalBusinessCategories';
import createInternalBusinessCategory from './internalBusinessCategories/mutations/createInternalBusinessCategory';
import deleteInternalBusinessCategory from './internalBusinessCategories/mutations/deleteInternalBusinessCategory';
import updateInternalBusinessCategory from './internalBusinessCategories/mutations/updateInternalBusinessCategory';


//Manufacturers
import manufacturer from './manufacturers/queries/manufacturer';
import manufacturers from './manufacturers/queries/manufacturers';
import createManufacturer from './manufacturers/mutations/createManufacturer';
import deleteManufacturer from './manufacturers/mutations/deleteManufacturer';
import updateManufacturer from './manufacturers/mutations/updateManufacturer';



const resolvers = {
    Query: {
        //Brands
        brands,
        brand,

        //Client
        client,
        clients,

        //Internal Business Category
        internalBusinessCategory,
        internalBusinessCategories,

        //Manufactures
        manufacturer,
        manufacturers,

        
    },

    Mutation: {
        //Brands
        createBrand,
        updateBrand,
        deleteBrand,

        //Clients
        createClient,
        updateClient,
        deleteClient,

        //Internal Business Category
        createInternalBusinessCategory,
        updateInternalBusinessCategory,
        deleteInternalBusinessCategory,

        //Manufacturers
        createManufacturer,
        updateManufacturer,
        deleteManufacturer,

        
    }
};

export default resolvers;