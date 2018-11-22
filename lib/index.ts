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

export const searchAll = search_all;
export const searchChannel = search_channel;
export const searchChannelSections = search_channel_sections;
export const searchCommentThreads = search_comment_threads;
export const searchComments = search_comments;
export const searchPlaylist = search_playlist;
export const searchPlaylistItems = search_playlist_items;
export const searchVideo = search_video;