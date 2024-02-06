import { Router } from 'express';
import { QuestionsController } from './controller';


export class QuestionsRoutes {


  static get routes(): Router {

    const router = Router();

    const todoController = new QuestionsController();

    router.get('/', todoController.getQuestions );
    
    router.post('/result', todoController.getResults );


    return router;
  }


}

