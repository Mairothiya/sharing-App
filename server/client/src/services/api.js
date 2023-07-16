import axios from 'axios';

const API_URI =  'https://sharing-app-eta.vercel.app';
 
export const uploadFile = async(data) =>{
    try{
        let response = await axios.post(`${API_URI}/upload`,data);
        return response.data;
    }
    catch(error){
        console.error('Error while calling the api',error.message);
    }
}
