/**
 * Función para comparar las respuestas del usuario con las respuestas correctas.
 * @param dataDummie Array de objetos que contiene las respuestas del usuario.
 * @param dataWithOptions Array de objetos que contiene las preguntas y respuestas correctas.
 * @returns Objeto con las respuestas del usuario, indicando si son correctas o no, y el puntaje obtenido.
 */
export const compararRespuestas = (dataDummie: { question: string; answer: string }[], dataWithOptions: any) => {
  // Crear un objeto para almacenar las respuestas del usuario y el puntaje obtenido
  let data: { answers: any[], score: number } = {
    answers: [],
    score: 0,
  };

  // Iterar sobre cada objeto en dataDummie
  for (const pregunta of dataDummie) {
    // Encontrar la pregunta correspondiente en dataWithOptions
    const question = dataWithOptions.find((item: any) => item.question === pregunta.question);
    
    // Verificar si se encuentra la pregunta en dataWithOptions y si la respuesta coincide con la respuesta correcta
    if (question && pregunta.answer.toString() === question.correct) {
      // Agregar la respuesta al array de respuestas indicando que es correcta
      data.answers.push({
        question: pregunta.question,
        isCorrect: true,
        correctAnswer: question.correct
      });
      // Incrementar el puntaje
      data.score += 1;
    } else {
      // Agregar la respuesta al array de respuestas indicando que es incorrecta
      data.answers.push({
        question: pregunta.question,
        isCorrect: false,
        correctAnswer: question.correct
      });
    }
  }

  return data; // Devolver el objeto con las respuestas del usuario y el puntaje obtenido
};
