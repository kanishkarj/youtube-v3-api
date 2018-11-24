import {
    search_channel_sections,
    search_channel,
} from './API/channel';

import {
    search_comment_threads,
    search_comments,
} from './API/comment';

import {
    search_playlist,
    search_playlist_items,
} from './API/playlist';

import {
    search_all,
    search_video
} from './API/video';

class YoutubeDataAPI {
    
    apiKey : string;

    constructor (API_KEY : string) {
        this.apiKey  = API_KEY;
    }

    searchAll (q : string, maxResults : Number, args : any = {}) {
        search_all (this.apiKey, q, maxResults, args);
    }

    searchVideo (id : string, args : any = {}) {
        search_video (this.apiKey, id, args);
    }

    searchChannel (id : string, args : any = {}) {
        search_channel (this.apiKey, id, args);
    }

    searchChannelSections (id : string, args : any = {}) {
        search_channel_sections (this.apiKey, id, args);
    }

    searchComments (parentId : string, args : any = {}) {
        search_comments (this.apiKey, parentId, args);
    }

    searchCommentThreads (videoId : string, args : any = {}) {
        search_comment_threads (this.apiKey, videoId, args);
    }

    searchPlaylist (channelId : string, maxResults : Number, args : any = {}) {
        search_playlist (this.apiKey, channelId, maxResults, args);
    }

    searchPlaylistItems (playlistId : string, maxResults : Number, args : any = {}) {
        search_playlist_items (this.apiKey, playlistId, maxResults, args);
    }
    
}

export default YoutubeDataAPI;