import axios, {AxiosError} from 'axios';

import { 
    SEARCH_PLAYLIST_URL,
    SEARCH_PLAYLIST_ITEMS_URL,
} from './urls';

export function search_playlist (
    API_KEY : string, 
    channelId : string,
    maxResults : number,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        if(maxResults > 50 || maxResults < 0) {
            reject(new Error("maxResults should be between 0 and 50."));
        }

        args.part = "snippet,contentDetails";
        args.channelId = channelId;
        args.maxResults = maxResults;
        args.key = API_KEY;

        axios.get(SEARCH_PLAYLIST_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}

export function search_playlist_items (
    API_KEY : string, 
    playlistId : string,
    maxResults : number,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        if(maxResults > 50 || maxResults < 0) {
            reject(new Error("maxResults should be between 0 and 50."));
        }

        args.part = "snippet,contentDetails";
        args.playlistId = playlistId;
        args.maxResults = maxResults;
        args.key = API_KEY;

        axios.get(SEARCH_PLAYLIST_ITEMS_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}

