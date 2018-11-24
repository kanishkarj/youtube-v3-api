'use strict';
const expect = require('chai').expect;
const { YoutubeDataAPI } = require('../dist/index.js');
const TEST_KEY = 'AIzaSyBsy4H9e1oxzgqAYLxfeUNdnCYjPinNUyk';

const index = new YoutubeDataAPI(TEST_KEY);

describe('Base Functions tests', () => {
    it('All Search', () => {
        index.searchAll("Node Js",25).then((data) => {
            expect(data.kind).to.equal('youtube#searchListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Channel Search', () => {
        index.searchChannel("UC_x5XG1OV2P6uZZ5FSM9Ttw").then((data) => {
            expect(data.kind).to.equal('youtube#channelListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Comment Threads Search', () => {
        index.searchCommentThreads("Ks-_Mh1QhMc").then((data) => {
            expect(data.kind).to.equal('youtube#commentThreadListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Comments Search', () => {
        index.searchComments("z13icrq45mzjfvkpv04ce54gbnjgvroojf0").then((data) => {
            expect(data.kind).to.equal('youtube#commentListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Playlist Search', () => {
        index.searchPlaylist("UC_x5XG1OV2P6uZZ5FSM9Ttw",25).then((data) => {
            expect(data.kind).to.equal('youtube#playlistListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Playlist Item Search', () => {
        index.searchPlaylistItems("PLBCF2DAC6FFB574DE",25).then((data) => {
            expect(data.kind).to.equal('youtube#playlistItemListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Video Search', () => {
        index.searchVideo("Ks-_Mh1QhMc").then((data) => {
            expect(data.kind).to.equal('youtube#videoListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Channel', () => {
        index.searchVideo("Ks-_Mh1QhMc").then((data) => {
            expect(data.kind).to.equal('youtube#videoListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Channel Section', () => {
        index.searchChannelSections("UC_x5XG1OV2P6uZZ5FSM9Ttw").then((data) => {
            expect(data.kind).to.equal('youtube#channelSectionListResponse');
        },(err) => {
            console.error(err);
        })
    });
});