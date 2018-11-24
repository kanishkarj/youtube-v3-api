export declare const YoutubeDataAPI: {
    new (API_KEY: string): {
        apiKey: string;
        searchAll(q: string, maxResults: number, args?: any): Promise<{}>;
        searchVideo(id: string, args?: any): Promise<{}>;
        searchChannel(id: string, args?: any): Promise<{}>;
        searchChannelSections(id: string, args?: any): Promise<{}>;
        searchComments(parentId: string, args?: any): Promise<{}>;
        searchCommentThreads(videoId: string, args?: any): Promise<{}>;
        searchPlaylist(channelId: string, maxResults: number, args?: any): Promise<{}>;
        searchPlaylistItems(playlistId: string, maxResults: number, args?: any): Promise<{}>;
    };
};
