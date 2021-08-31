import fs from 'fs';
import path from 'path';
import {ApolloServer} from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import resolvers from './resolvers';
import userGroups from './utils/userGroups';
import AdminAuthHelper from './helpers/AdminAuthHelper';
import ClientAuthHelper from './helpers/ClientAuthHelper';


const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
    resolvers,
    context: ({ req }) => {
        const queryData = req.body.query.replace('query {', '').trim();
        if (queryData.startsWith(userGroups.admin)) {
            new AdminAuthHelper().run();
        } else if (queryData.startsWith(userGroups.client)) {
            new ClientAuthHelper().run();
        } else {
            throw new Error('Uhhmmm, we do not support such user groups');
        }
        return {
            req,
            prisma
        }
    }
});

server.listen().then(({url}) => {
    console.log(url);
});
