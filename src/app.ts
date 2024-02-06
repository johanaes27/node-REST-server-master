import { envs } from './config/envs';
import { MongoDatabase } from './data/mongo';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';




(async()=> {
  main();
})();


async function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });


  server.start();
}