import axios, {AxiosError} from 'axios';

import { 
    SEARCH_CHANNEL_URL, 
    SEARCH_CHANNEL_SECTIONS_URL
} from './urls';

export function search_channel_sections (
    API_KEY : string, 
    channelId : string,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet,contentDetails";
        args.channelId = channelId;
        args.key = API_KEY;

        axios.get(SEARCH_CHANNEL_SECTIONS_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}

export function search_channel (
    API_KEY : string, 
    id : string,
    args : any = {},        
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet,contentDetails,statistics";
        args.id = id;
        args.key = API_KEY;

        axios.get(SEARCH_CHANNEL_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });    
}