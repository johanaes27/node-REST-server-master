import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { compararRespuestas } from '../../utils'
import { QuestionModel } from '../../data/mongo';

export class QuestionsController {

  //* DI
  constructor() { }


  public getQuestions = async( req: Request, res: Response ) => {
    const questions = await QuestionModel.find() ?? [];
    questions?.forEach(question => {
      (question as unknown as Record<string, unknown>).correct = undefined
    })
    return res.json( questions );
  };

  public getResults = async( req: Request, res: Response ) => { 
    const questions = await QuestionModel.find();
    const result = compararRespuestas(req.body, questions)
    return res.json( result );
  }

}