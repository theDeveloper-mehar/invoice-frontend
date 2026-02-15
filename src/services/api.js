/* API service
this file centralizes all HTTP requests using axios.

it defines automatically base urland autopmatically attaches authentication token to requst headers*/





import axios from 'axios';

const API = axios.create({
   baseURL: "https://invoice-backend-ao12.onrender.com/"
});

API.interceptors.request.use((req)=>
{
    const token = localStorage.getItem("token");
    if(token)
    {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;