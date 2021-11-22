import { runSeeds, emptyBrands } from "../../utils/Common";
require('../../utils/TestInitializer');

beforeAll(async () => {
    runSeeds();
});

afterAll(async () => {
    emptyBrands()
})

test('Seed test db', async () => {
    
});


