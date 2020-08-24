import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: {},
  playList: [
    {
      "name": "麻雀",
      "id": 1407551413,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 4292,
          "name": "李荣浩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 83878976,
        "name": "麻雀",
        "picUrl": "https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg",
        "tns": [],
        "pic_str": "109951165182029540",
        "pic": 109951165182029540
      },
      "dt": 252757,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10112685,
        "vd": -47447
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6067629,
        "vd": -44879
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4045101,
        "vd": -43278
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416577,
      "mv": 10904989,
      "publishTime": 0
    },
    {
      "name": "雅俗共赏",
      "id": 411214279,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 31,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34749138,
        "name": "青年晚报",
        "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        "tns": [],
        "pic": 3431575794705764
      },
      "dt": 249621,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9987177,
        "vd": -22200
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5992323,
        "vd": -19600
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3994896,
        "vd": -17800
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "mv": 5302271,
      "publishTime": 1461723397683
    },
    {
      "name": "余香",
      "id": 487885426,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12002056,
          "name": "张小九",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 59,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 35691684,
        "name": "余香",
        "picUrl": "https://p1.music.126.net/LNN2f6W5_s6GFQs-l3gnaw==/109951165221750422.jpg",
        "tns": [],
        "pic_str": "109951165221750422",
        "pic": 109951165221750420
      },
      "dt": 246019,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 9842982,
        "vd": -8202
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 5905807,
        "vd": -5640
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 3937219,
        "vd": -4176
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": -1,
      "mv": 0,
      "publishTime": 1498924833914
    }
  ],
  currentSongIndex: 0,
  sequence: 0, // 0 循环  1 随机 2单曲循环
  lyricList: [],
  currentLyricIndex: 0
})

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index)
    default:
      return state
  }
}