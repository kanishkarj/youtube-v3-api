"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const urls_1 = require("./urls");
function search_all(API_KEY, q, maxResults, args = {}) {
    return new Promise((resolve, reject) => {
        if (maxResults > 50 || maxResults < 0) {
            reject(new Error("maxResults should be between 0 and 50."));
        }
        args.part = "snippet";
        args.maxResults = maxResults;
        args.q = q;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_ALL_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_all = search_all;
function search_playlist(API_KEY, channelId, maxResults, args = {}) {
    return new Promise((resolve, reject) => {
        if (maxResults > 50 || maxResults < 0) {
            reject(new Error("maxResults should be between 0 and 50."));
        }
        args.part = "snippet,contentDetails";
        args.channelId = channelId;
        args.maxResults = maxResults;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_PLAYLIST_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_playlist = search_playlist;
function search_channel(API_KEY, id, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet,contentDetails,statistics";
        args.id = id;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_CHANNEL_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_channel = search_channel;
function search_playlist_items(API_KEY, playlistId, maxResults, args = {}) {
    return new Promise((resolve, reject) => {
        if (maxResults > 50 || maxResults < 0) {
            reject(new Error("maxResults should be between 0 and 50."));
        }
        args.part = "snippet,contentDetails";
        args.playlistId = playlistId;
        args.maxResults = maxResults;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_PLAYLIST_ITEMS_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_playlist_items = search_playlist_items;
function search_video(API_KEY, id, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet,contentDetails,statistics";
        args.id = id;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_VIDEO_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_video = search_video;
function search_comment_threads(API_KEY, videoId, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet,replies";
        args.videoId = videoId;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_COMMENT_THREADS_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_comment_threads = search_comment_threads;
function search_comments(API_KEY, parentId, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet";
        args.parentId = parentId;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_COMMENTS_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}
exports.search_comments = search_comments;
