import { useReducer } from "react"
import { PomodoroState } from "../interfaces/interfaces"
import { pomodoroReducer } from "../reducers/pomodoroReducer"
import { PomodoroContext } from "./PomodoroContext"


const INITIAL_STATE: PomodoroState = {
  mode: "modo-2",
  soundTime: 0,
  sessionTime: 0.1,
  breakTime: 5,
  interval: 0,
  isPlaying: false,
  name: "",
  volume: 50
}

interface PomodoroProviderProps {
  children: JSX.Element | JSX.Element[]
}


export const PomodoroProvider = ({ children }: PomodoroProviderProps) => {

  const [pomodoroState, dispatch] = useReducer(pomodoroReducer, INITIAL_STATE)

  const playPomodoro = () => {
    dispatch({ type: "PLAY_POMODORO" })
  }

  const changeAlarm = (value: string) => {
    dispatch({ type: "TYPE_POMODORO", payload: value })
  }
  const changeMode = (value: string) => {
    dispatch({ type: "MODE_POMODORO", payload: value })
  }

  const changeSessionTime = (value: number) => {
    dispatch({ type: "SESSION_POMODORO", payload: value })
  }

  const changeBreakTime = (value: number) => {
    dispatch({ type: "BREAK_POMODORO", payload: value })
  }









  return (
    <PomodoroContext.Provider value={{ pomodoroState, playPomodoro, changeAlarm, changeMode, changeSessionTime, changeBreakTime }}>
      {children}
    </PomodoroContext.Provider>
  )
}