import { Router } from 'express';

import { QuestionsRoutes } from './questions/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/questions', QuestionsRoutes.routes );
    



    return router;
  }


}

