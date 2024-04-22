import { PomodoroState } from "../interfaces/interfaces"

type PomodoroAction = { type: "PLAY_POMODORO" } | { type: "TYPE_POMODORO", payload: string } | { type: "VOLUME_POMODORO", payload: number } | { type: "SESSION_POMODORO", payload: number } | { type: "BREAK_POMODORO", payload: number } | { type: "INTERVAL_POMODORO" } | { type: "DURATION_POMODORO" } | { type: "MODE_POMODORO", payload: string }

export const pomodoroReducer = (state: PomodoroState, action: PomodoroAction) => {

  switch (action.type) {
    case "PLAY_POMODORO":
      return {
        ...state,
        isPlaying: !state.isPlaying
      }

    case "TYPE_POMODORO":
      return {
        ...state,
        name: action.payload
      }

    case "VOLUME_POMODORO":
      return {
        ...state,
        volume: action.payload
      }
    case "MODE_POMODORO":
      return {
        ...state,
        mode: action.payload
      }

    case "SESSION_POMODORO":
      return {
        ...state,
        sessionTime: action.payload
      }
    case "BREAK_POMODORO":
      return {
        ...state,
        breakTime: action.payload
      }

    default:
      return state
  }
}