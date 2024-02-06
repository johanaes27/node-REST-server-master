




# Dev

1. Clonar el .env.template y crear el .env
2. Ejecutar el comando ```docker compose up -d```

Endpoint: /api/questions
Método HTTP: GET
Descripción:
Este endpoint devuelve una lista de preguntas disponibles en el sistema.

Parámetros de entrada:
Ninguno

Respuesta:
Código de estado: 200 OK

Formato del cuerpo de la respuesta: JSON
Ejemplo de solicitud

GET localhost:3001/api/questions





Endpoint: /api/questions/result
Método HTTP: POST
Descripción:
Este endpoint permite enviar las respuestas a un cuestionario y obtener los resultados.

Parámetros de entrada:
Formato del cuerpo de la solicitud: JSON
Ejemplo de solicitud:

POST localhost:3001/api/questions/result
Content-Type: application/json
body:
[
    {
        "question": "Cuantos miembros hay en la familia simpson",
        "answer": 5
    },
    {
        "question": "Direccion de los simpson",
        "answer": "Av Siempre viva"
    }
]
3. Ejecutar el comando yarn run dev para iniciar el servidor