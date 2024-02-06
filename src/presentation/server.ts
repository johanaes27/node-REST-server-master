import express, { Router } from 'express';
import path from 'path';
import cors from 'cors'

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  
  
  async start() {
    

    //* Middlewares
    this.app.use( express.json() ); // raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded

    
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*'); // Permite cualquier origen (puede ser un riesgo de seguridad)
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    const corsOptions = {
      origin: 'http://localhost:5173',
      optionsSuccessStatus: 200, // Algunos navegadores pueden enviar solicitudes OPTIONS antes de la solicitud real.
    };
    
    // Usar opciones CORS más detalladas
    this.app.use(cors(corsOptions));
    

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );


    //* Routes
    this.app.use( this.routes );


    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });

  }

}