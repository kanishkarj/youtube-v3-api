"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const urls_1 = require("./urls");
function search_all(API_KEY, query, maxResults) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(urls_1.SEARCH_ALL_URL, {
            data: {
                type: "",
                q: query,
                maxResults: "50",
                part: "snippet",
                key: API_KEY,
            }
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            // console
            reject(new Error(err));
        });
    });
}
exports.search_all = search_all;
