import mongoose from "mongoose";

/**
 * Interfaz que define las opciones de conexión a la base de datos MongoDB.
 */
interface ConnectionOptions {
    /**
     * URL de conexión a la base de datos MongoDB.
     */
    mongoUrl: string;
    /**
     * Nombre de la base de datos.
     */
    dbName: string;
}

/**
 * Clase estática para gestionar la conexión a la base de datos MongoDB.
 */
export class MongoDatabase {

    /**
     * Método estático para establecer conexión con la base de datos MongoDB.
     * @param options Opciones de conexión a la base de datos.
     */
    static async connect(options: ConnectionOptions) {
        const { mongoUrl, dbName } = options;

        try {
            // Conectar a la base de datos MongoDB utilizando la URL y el nombre de la base de datos proporcionados
            await mongoose.connect(mongoUrl, { dbName });
            console.log('MongoDB conectado exitosamente');
        } catch (error) {
            console.error('Error al conectar con MongoDB:', error);
            throw error;
        }
    }
}
