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
            reject(err);
        });
    });
}
exports.search_all = search_all;
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
            reject(err);
        });
    });
}
exports.search_video = search_video;
