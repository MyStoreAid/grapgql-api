import fs from 'fs';
import path from 'path';
import {ApolloServer} from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import resolvers from './resolvers';


const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
    resolvers,
    context: ({ req }) => {
        return { prisma }
    }
});

server.listen().then(({url}) => {
    console.log("live reloading");
    console.log(url);
});