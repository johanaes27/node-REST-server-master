import mongoose from "mongoose";


interface ConnectionOptions {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {

    static async connect( options: ConnectionOptions  ) {
        const { mongoUrl, dbName } = options;

        try {

            await mongoose.connect(process.env.DB_CNN as string, { dbName });
            console.log('mongo connected')
            
        } catch (error) {
            console.error(error);
            throw error;
            
        }

    }

}






