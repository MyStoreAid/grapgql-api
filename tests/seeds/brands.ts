import { Brand } from "@mystoreaid/prisma-models";

async function seedBrands() {
    await Brand.createOne({
        id: "e7ceb143-9c3b-48f1-9617-430814fa99d3",
        name: "Unilver"
    });
}

async function emptyBrands() {
    Brand.table.delete();
}


export {
    seedBrands,
    emptyBrands
}