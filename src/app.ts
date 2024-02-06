import { envs } from './config/envs';
import { MongoDatabase } from './data/mongo';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

/**
 * Función principal que inicializa el servidor y establece la conexión con la base de datos.
 */
(async () => {
  await main(); // Llamar a la función principal
})();

/**
 * Función principal que configura el servidor y la conexión con la base de datos.
 */
async function main() {
  // Crear una instancia del servidor con la configuración proporcionada
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  // Establecer conexión con la base de datos MongoDB
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Iniciar el servidor
  server.start();
}
