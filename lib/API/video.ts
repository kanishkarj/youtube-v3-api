import axios, {AxiosError} from 'axios';

import { 
    SEARCH_ALL_URL,
    SEARCH_VIDEO_URL,
} from './urls';

export function search_all (
        API_KEY : string, 
        q : string, 
        maxResults : number,
        args : any = {},        
    ) {
        return new Promise<{}>((resolve, reject) => {
            
            if(maxResults > 50 || maxResults < 0) {
                reject(new Error("maxResults should be between 0 and 50."));
            }
    
            args.part = "snippet";
            args.maxResults = maxResults;
            args.q = q;
            args.key = API_KEY;

            axios.get(SEARCH_ALL_URL,{
                params : args
            }).then((response:any) => {
                resolve(response.data);
            }).catch((err : AxiosError) => {
                reject(err);
            });
        });    
}

export function search_video (
    API_KEY : string, 
    id : string,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet,contentDetails,statistics";
        args.id = id;
        args.key = API_KEY;

        axios.get(SEARCH_VIDEO_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}


