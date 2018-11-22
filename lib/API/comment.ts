import axios from 'axios';

import { 
    SEARCH_COMMENT_THREADS_URL,
    SEARCH_COMMENTS_URL,
} from './urls';

export function search_comment_threads (
    API_KEY : String, 
    videoId : String,
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
        }).catch((err) => {
            reject(new Error(err));
        });
    });    
}

export function search_comments (
    API_KEY : String, 
    parentId : String,
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
        }).catch((err) => {
            reject(new Error(err));
        });
    });    
}
