import axios from 'axios'
import { getCookie, setCookie } from 'typescript-cookie';

export const axiosInstance = axios.create({});
// axiosInstance.defaults.headers = 
// const baseurl = "http://ec2-13-234-119-18.ap-south-1.compute.amazonaws.com"
const baseurl = "http://localhost:3000"


export const apiConnector = (method,url,bodyData) => {
    // const token = getCookie("token"); s
    let temp = {
        // token:token || null,
        ...bodyData
    } 

    return axiosInstance(
        {
            method: `${method}`,
            url :   `${baseurl+url}`,
            data : temp,
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
              },
            params :  null,

        }
    )
}