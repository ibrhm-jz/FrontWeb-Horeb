import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODg5NzcwOCwiZXhwIjoxNTk4OTAxMzA4LCJuYmYiOjE1OTg4OTc3MDgsImp0aSI6IkF6VXNPNjVsN3NzdTJNQWoiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.hSV-_BLvLPfQshENYrRSfW7TyipETOTJHqN38-He-mg'