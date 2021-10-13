export default class PrismaContextProvider {
    static connection: any;

    static setConnection(prismaFullContext: any) {
        this.connection = prismaFullContext;
    }
    
    static get getConnection() {
        return this.connection;
    }
}