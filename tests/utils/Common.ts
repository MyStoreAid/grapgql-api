// run migrations
import {emptyBrands, seedBrands} from '../seeds/brands';

async function runSeeds() {
    await seedBrands();
}

async function emptyDB() {
    await emptyBrands();
}

export {
    runSeeds,
    emptyBrands
}