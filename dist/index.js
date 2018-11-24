"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channel_1 = require("./API/channel");
const comment_1 = require("./API/comment");
const playlist_1 = require("./API/playlist");
const video_1 = require("./API/video");
exports.YoutubeDataAPI = class {
    constructor(API_KEY) {
        this.apiKey = API_KEY;
    }
    searchAll(q, maxResults, args = {}) {
        return video_1.search_all(this.apiKey, q, maxResults, args);
    }
    searchVideo(id, args = {}) {
        return video_1.search_video(this.apiKey, id, args);
    }
    searchChannel(id, args = {}) {
        return channel_1.search_channel(this.apiKey, id, args);
    }
    searchChannelSections(id, args = {}) {
        return channel_1.search_channel_sections(this.apiKey, id, args);
    }
    searchComments(parentId, args = {}) {
        return comment_1.search_comments(this.apiKey, parentId, args);
    }
    searchCommentThreads(videoId, args = {}) {
        return comment_1.search_comment_threads(this.apiKey, videoId, args);
    }
    searchPlaylist(channelId, maxResults, args = {}) {
        return playlist_1.search_playlist(this.apiKey, channelId, maxResults, args);
    }
    searchPlaylistItems(playlistId, maxResults, args = {}) {
        return playlist_1.search_playlist_items(this.apiKey, playlistId, maxResults, args);
    }
};
