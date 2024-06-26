import { PomodoroState } from "../interfaces/interfaces"



interface PlayButtonPomodoroProps {
  play: () => void
  pomodoroState: PomodoroState
}

export const PlayButtonPomodoro = ({ play, pomodoroState }: PlayButtonPomodoroProps) => {

  return (
    <button onClick={play} className={pomodoroState.isPlaying ? "pomodoro-btn pomodoro-btn-disabled" : "pomodoro-btn"}  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>

    </button>
  )
}