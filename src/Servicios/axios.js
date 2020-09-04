import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5OTIzODM2OSwiZXhwIjoxNTk5MjQxOTY5LCJuYmYiOjE1OTkyMzgzNjksImp0aSI6IjQzVlBBTjY3UmFHU1Qzdk8iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.kMR05iIAfdJ-c4E4O10GuRzFsQp5JGaqiFGdPcY6yxM'