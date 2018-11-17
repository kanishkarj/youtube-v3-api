import axios from 'axios';
import {SEARCH_ALL_URL} from './urls';



export function search_all (API_KEY : String, query : String, maxResults : Number) {
    return new Promise<{}>((resolve, reject) => { 
        axios.get(SEARCH_ALL_URL,{
            params : {
                type : "",
                q : query,
                maxResults: "50",
                part: "snippet",
                key: API_KEY,
            }
        }).then((data:any) => {
            resolve(data);
        }).catch((err) => {
            reject(new Error(err));
        });
    })    
}