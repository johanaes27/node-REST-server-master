import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { compararRespuestas } from '../../utils';
import { QuestionModel } from '../../data/mongo';

/**
 * Controlador para manejar las solicitudes relacionadas con las preguntas.
 */
export class QuestionsController {

  //* DI
  constructor() { }

  /**
   * Método para obtener todas las preguntas.
   * @param req Objeto de solicitud HTTP.
   * @param res Objeto de respuesta HTTP.
   * @returns Respuesta JSON con todas las preguntas.
   */
  public getQuestions = async(req: Request, res: Response) => {
    try {
      // Obtener todas las preguntas de la base de datos MongoDB
      const questions = await QuestionModel.find() ?? [];
      // Eliminar la propiedad "correct" de cada pregunta antes de enviar la respuesta
      questions?.forEach(question => {
        (question as unknown as Record<string, unknown>).correct = undefined;
      });
      return res.json(questions);
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  /**
   * Método para obtener los resultados de las respuestas proporcionadas por el usuario.
   * @param req Objeto de solicitud HTTP que contiene las respuestas del usuario.
   * @param res Objeto de respuesta HTTP.
   * @returns Respuesta JSON con los resultados de las respuestas proporcionadas.
   */
  public getResults = async(req: Request, res: Response) => { 
    try {
      // Obtener todas las preguntas de la base de datos MongoDB
      const questions = await QuestionModel.find();
      // Comparar las respuestas del usuario con las respuestas correctas y calcular el resultado
      const result = compararRespuestas(req.body, questions);
      return res.json(result);
    } catch (error) {
      console.error('Error al obtener los resultados:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}
