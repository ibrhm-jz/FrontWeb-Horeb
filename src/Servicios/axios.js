import axios from 'axios';

export const API = axios.create({

    baseURL: `http://127.0.0.1:8000/api/`


})
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5OTE2MzIyNCwiZXhwIjoxNTk5MTY2ODI0LCJuYmYiOjE1OTkxNjMyMjQsImp0aSI6IlROb1p0eTZzY3ppcFRjMjEiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.xU1fP9OP4k7WJxEqKQ2wBsvi_WfAy1WBb51vu46JTK0'