//Brands
import brand from './brands/queries/brand';
import brands from './brands/queries/brands';
import createBrand from './brands/mutations/createBrand';
import updateBrand from './brands/mutations/updateBrand';
import deleteBrand from './brands/mutations/deleteBrand';

const resolvers = {
    Query: {
        //Brands
        brand,
        brands
    },

    Mutation: {
        //Brands
        createBrand,
        updateBrand,
        deleteBrand
    }
};

export default resolvers;