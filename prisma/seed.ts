import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// async function main() {
//     const data = {
//         id: "e7ceb143-9c3b-48f1-9617-430814fa99d3",
//         name: "Unilever",
//     };
//   const unilever = await prisma.brands.create({
//     data: {
//         id,
//     }
//   });
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })