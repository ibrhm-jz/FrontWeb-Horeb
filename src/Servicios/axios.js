import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODYzNTkyNSwiZXhwIjoxNTk4NjM5NTI1LCJuYmYiOjE1OTg2MzU5MjUsImp0aSI6IjFQek5RZElYblFYWldnRDciLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.HdTQcS5dZTqFh3NTqPMlunKQyZNoU0vIGMp1kGs2BVY'