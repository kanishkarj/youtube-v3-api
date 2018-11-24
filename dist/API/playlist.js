"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const urls_1 = require("./urls");
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
            reject(err);
        });
    });
}
exports.search_playlist = search_playlist;
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
            reject(err);
        });
    });
}
exports.search_playlist_items = search_playlist_items;
