import { getSongDetail } from '@/services/player'
import * as actionTypes from './constants'

const changeSongDetailAction = currentSong => ({
  type: actionTypes.CHANGE_SONG_DETAIL,
  currentSong
})

export const getSongDetailAction = ids => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}