import { useContext } from "react"
import { PomodoroContext } from "../context/PomodoroContext"

export const usePomodoro = () => {

  const { pomodoroState, playPomodoro, changeAlarm, changeMode, changeSessionTime, changeBreakTime } = useContext(PomodoroContext)



  return (
    { pomodoroState, playPomodoro, changeAlarm, changeMode, changeSessionTime, changeBreakTime }
  )
}