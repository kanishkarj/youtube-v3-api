'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');
const TEST_KEY = 'AIzaSyBsy4H9e1oxzgqAYLxfeUNdnCYjPinNUyk';


describe('Base Functions tests', () => {
    it('All Search', () => {
        index.searchAll(TEST_KEY,"Node Js",25).then((data) => {
            expect(data.kind).to.equal('youtube#searchListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Channel Search', () => {
        index.searchChannel(TEST_KEY,"UC_x5XG1OV2P6uZZ5FSM9Ttw").then((data) => {
            expect(data.kind).to.equal('youtube#channelListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Comment Threads Search', () => {
        index.searchCommentThreads(TEST_KEY,"Ks-_Mh1QhMc").then((data) => {
            expect(data.kind).to.equal('youtube#commentThreadListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Comments Search', () => {
        index.searchComments(TEST_KEY,"z13icrq45mzjfvkpv04ce54gbnjgvroojf0").then((data) => {
            expect(data.kind).to.equal('youtube#commentListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Playlist Search', () => {
        index.searchPlaylist(TEST_KEY,"UC_x5XG1OV2P6uZZ5FSM9Ttw",25).then((data) => {
            expect(data.kind).to.equal('youtube#playlistListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Playlist Item Search', () => {
        index.searchPlaylistItems(TEST_KEY,"PLBCF2DAC6FFB574DE",25).then((data) => {
            expect(data.kind).to.equal('youtube#playlistItemListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Video Search', () => {
        index.searchVideo(TEST_KEY,"Ks-_Mh1QhMc").then((data) => {
            expect(data.kind).to.equal('youtube#videoListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Channel', () => {
        index.searchVideo(TEST_KEY,"Ks-_Mh1QhMc").then((data) => {
            expect(data.kind).to.equal('youtube#videoListResponse');
        },(err) => {
            console.error(err);
        })
    });
    it('Channel Section', () => {
        index.searchChannelSections(TEST_KEY,"UC_x5XG1OV2P6uZZ5FSM9Ttw").then((data) => {
            expect(data.kind).to.equal('youtube#channelSectionListResponse');
        },(err) => {
            console.error(err);
        })
    });
});