import { SoundState } from "../interfaces/interfaces"


type MusicAction = { type: "PLAY_MUSIC" } | { type: "VOLUME_MUSIC", payload: number } | { type: "TYPE_MUSIC", payload: string }

export const musicReducer = (state: SoundState, action: MusicAction): SoundState => {


  switch (action.type) {
    case "PLAY_MUSIC":
      return {
        ...state,
        isPlaying: !state.isPlaying
      }

    case "VOLUME_MUSIC":
      return {
        ...state,
        volume: action.payload
      }

    case "TYPE_MUSIC":
      return {
        ...state,
        name: action.payload
      }

    default:
      return state
  }




}
