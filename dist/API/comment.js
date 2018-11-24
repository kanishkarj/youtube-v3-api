"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const urls_1 = require("./urls");
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
            reject(err);
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
            reject(err);
        });
    });
}
exports.search_comments = search_comments;
