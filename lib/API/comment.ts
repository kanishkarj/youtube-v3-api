import axios, {AxiosError} from 'axios';

import { 
    SEARCH_COMMENT_THREADS_URL,
    SEARCH_COMMENTS_URL,
} from './urls';

export function search_comment_threads (
    API_KEY : string, 
    videoId : string,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet,replies";
        args.videoId = videoId;
        args.key = API_KEY;

        axios.get(SEARCH_COMMENT_THREADS_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}

export function search_comments (
    API_KEY : string, 
    parentId : string,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet";
        args.parentId = parentId;
        args.key = API_KEY;

        axios.get(SEARCH_COMMENTS_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}
