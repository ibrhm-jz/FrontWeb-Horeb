import axios from 'axios';

export const API = axios.create({

    //  baseURL: `https://api.suministroshoreb.com.mx/api/`
   baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5OTI0MjI3NiwiZXhwIjoxNTk5MjQ1ODc2LCJuYmYiOjE1OTkyNDIyNzYsImp0aSI6IlBaTGU4MnJvaDh6elp5WkEiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.7poSBeIJpHdZOIkvbT8ylatnA2Q32D-9KecLGumRwls'