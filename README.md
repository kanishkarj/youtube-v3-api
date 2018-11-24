# youtube-v3-api

An Asynchronous promise based wrapper around the YouTube Data API. 

[![Build Status](https://travis-ci.org/kanishkarj/youtube-v3-api.svg?branch=master)](https://travis-ci.org/kanishkarj/youtube-v3-api)
[![npm version](https://badge.fury.io/js/youtube-v3-api.svg)](https://badge.fury.io/js/youtube-v3-api)
![DUB](https://img.shields.io/dub/l/vibe-d.svg)

#### Usage

Open terminal from the project folder execute the following command to install the package :

```shell
yarn add youtube-v3-api
--------OR--------
npm install youtube-v3-api 
```

Sample code snippet :

```javascript
const { YoutubeDataAPI } = require("youtube-v3-api")
const API_KEY = '<ENTER YOUR API KEY HERE>';

const api = new YoutubeDataAPI(API_KEY);

api.searchAll(API_KEY,"Node Js",25).then((data) => {
    console.log(data);
},(err) => {
    console.error(err);
})
```

## Documentation

### searchAll 

Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource. 

```typescript
searchAll(q: string, maxResults: number, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* q : Search query.
* maxResults : The maximum number of search results (0 - 50, for more results check out next and previous page call).
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/search/list). 

### searchVideo 

Returns a list of videos that match the API request parameters.

```typescript
searchVideo(id: string, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* id : Video Id.
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/videos/list). 


### searchChannel 

Returns a collection of zero or more channel resources that match the request criteria.

```typescript
searchChannel(id: string, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* id : Channel Id.
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/channels/list). 


### searchChannelSections 

Returns a list of videos that match the API request parameters.

```typescript
searchChannelSections(channelId: string, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* channelId : Channel Id.
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/channelSections/list). 


### searchComments 

Returns a list of comments that match the API request parameters.

```typescript
searchComments(parentId: string, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* parentId : The parent comment is the first comment on a video.
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/comments/list). 


### searchCommentThreads 

Returns a list of comment threads that match the API request parameters.

```typescript
searchCommentThreads(videoId: string, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* videoId : Video Id.
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/commentThreads/list). 


### searchPlaylist 

Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs. 

```typescript
searchPlaylist(channelId: string, maxResults: number, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* channelId : Channel Id.
* maxResults : The maximum number of search results (0 - 50, for more results check out next and previous page call).
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/playlists/list). 


### searchPlaylistItems 

Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.

```typescript
searchPlaylistItems(playlistId: string, maxResults: number, args?: any): Promise<{}>
```

* API_KEY : The youtube API Key. See [here](https://developers.google.com/youtube/v3/docs/) to know about how to get an API KEY.
* playlistId : Playlist Id.
* maxResults : The maximum number of search results (0 - 50, for more results check out next and previous page call).
* args (Optional) : Additional parameters, to know more [click here](https://developers.google.com/youtube/v3/docs/playlists/list). 


---------------------------------------

## Todo

* Use the default Http module so that this module can be free from dependency.
* Any missing basic API calls.
* next and previous page.
* Make typescript classes for the data returned so that additional functions can be attached like next page and previous page.
* Embed all OAuth2 API's.
* Add the additional API calls which need OAuth2 Access.

NOTE : Everything must `Promise`d.