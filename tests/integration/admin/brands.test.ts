import productCategory from "resolvers/productCategories/admin/queries/productCategory";

test('', () => {
    console.log(process.env.DATABASE_URL);
    expect(process.env.DATABASE_URL).toBe('postgresql://tester:testerpass@localhost:8002/mystoreaid_test?schema=public');
});
