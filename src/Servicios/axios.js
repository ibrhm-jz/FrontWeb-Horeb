import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5OTA3MjUxNiwiZXhwIjoxNTk5MDc2MTE2LCJuYmYiOjE1OTkwNzI1MTYsImp0aSI6IlFOZHR6N1RQSzc4WloxNXMiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.tKq8VowLeZA1fQmsA-x_GiOhFjdaqieIRipC2kgIdmI'