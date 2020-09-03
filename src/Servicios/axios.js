import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5OTE2ODU1MSwiZXhwIjoxNTk5MTcyMTUxLCJuYmYiOjE1OTkxNjg1NTEsImp0aSI6ImJyMEVjTUpVb3I5QlA3UEkiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.5hJOdnvDq8Y9AT3bhMj68rSL1cyLQlWotTb6XkcIKu8'