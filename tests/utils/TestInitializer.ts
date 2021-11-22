import {Model} from '@mystoreaid/prisma-models';
import { PrismaClient } from '.prisma/client';
const prisma = new PrismaClient();
Model.setConnection(prisma);
