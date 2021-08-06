import brands from './brands/queries/brands';
import createBrand from './brands/mutations/createBrand';


const resolvers = {
    Query: {
        brands
    },

    Mutation: {
        createBrand
    }
};

export default resolvers;