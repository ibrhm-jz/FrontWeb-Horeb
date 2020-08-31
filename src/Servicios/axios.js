import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODkwNjg1NiwiZXhwIjoxNTk4OTEwNDU2LCJuYmYiOjE1OTg5MDY4NTYsImp0aSI6Iktrd3R1UFBXTll6OFAzdFkiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.oyIM97G8wwVU-Ck1XY6ZCUknX8Nf7dTF12cdhHlWTn0'