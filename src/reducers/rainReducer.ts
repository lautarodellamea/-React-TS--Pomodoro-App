import { SoundState } from "../interfaces/interfaces"


type RainAction = { type: "PLAY_RAIN" } | { type: "TYPE_RAIN", payload: string } | { type: "VOLUME_RAIN", payload: number }


export const rainReducer = (state: SoundState, action: RainAction) => {

  switch (action.type) {

    case "PLAY_RAIN":
      return {
        ...state,
        isPlaying: !state.isPlaying
      }

    case "TYPE_RAIN":
      return {
        ...state,
        name: action.payload
      }


    case "VOLUME_RAIN":
      return {
        ...state,
        volume: action.payload
      }

    default:
      return state
  }
}