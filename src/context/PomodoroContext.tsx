import { createContext } from "react";
import { PomodoroState } from "../interfaces/interfaces";


type PomodoroContextProps = {
  pomodoroState: PomodoroState
  playPomodoro: () => void
  changeAlarm: (value: string) => void
  changeMode: (value: string) => void
  // changeAlarmSoundTime: (value: number) => void
  changeSessionTime: (value: number) => void
  changeBreakTime: (value: number) => void
  // changeInterval: (value: number) => void
}


export const PomodoroContext = createContext<PomodoroContextProps>({} as PomodoroContextProps)