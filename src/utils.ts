export const compararRespuestas = (dataDummie: {
    question: string;
    answer: string;
  }[], dataWithOptions: any) => {
    // Iterar sobre cada objeto
    console.log("dataDummie", dataDummie  )
    let data: {answers: any[], score: number} = {
      answers: [],
      score: 0,
    };
    for (const pregunta of dataDummie) {
      // Encontrar la pregunta correspondiente en dataWithOptions
      const question = dataWithOptions.find((item: any) => item.question === pregunta.question);
  
      // Verificar si la respuesta coincide con la respuesta correcta en dataWithOptions
      if (question && pregunta.answer.toString() === question.correct) {
        data.answers.push({
          question: pregunta.question,
          isCorrect: true,
          correctAnswer: question.correct
        })
        data.score += 1
      } else {
        data.answers.push({
          question: pregunta.question,
          isCorrect: false,
          correctAnswer: question.correct
        })
      }
    }
  
    return data;
  }
  