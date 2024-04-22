import { useEffect, useState, useRef } from "react"
import { usePomodoro } from "../hooks/usePomodoro"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PlayButtonPomodoro } from "./PlayButtonPomodoro";
import { PauseButtonPomodoro } from "./PauseButtonPomodoro";
import { PomodoroState } from '../interfaces/interfaces';


const red = '#f54e4e'
const green = '#4aec8c'

export const Pomodoro = () => {

  const { pomodoroState, playPomodoro } = usePomodoro()

  const [mode, setMode] = useState("work")
  const [secondsLeft, setSecondsLeft] = useState(pomodoroState.sessionTime * 60)

  const secondsLeftRef = useRef(secondsLeft)
  const modeRef = useRef(mode)

  const play = () => {
    playPomodoro()
  }

  const reset = () => {

    setSecondsLeft(pomodoroState.sessionTime * 60)




    playPomodoro()

  }



  const initPomodoro = () => {
    setSecondsLeft(pomodoroState.sessionTime * 60)

  }

  const changeModePomodoro = () => {

    // guardo el siguiente modo
    const nextMode = modeRef.current === "work" ? "break" : "work"
    setMode(nextMode)
    modeRef.current = nextMode

    const audioAlarmElement = document.getElementById("audio-alarm") as HTMLAudioElement
    audioAlarmElement.play()





    // guardo el siguiente tiempo de sesión o descanso dependiendo del modo
    const nextSeconds = nextMode === "work" ? pomodoroState.sessionTime * 60 : pomodoroState.breakTime * 60
    setSecondsLeft(nextSeconds)
    secondsLeftRef.current = nextSeconds

  }

  const tick = () => {
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }


  useEffect(() => {

    console.log("render")
    initPomodoro()

    if (!pomodoroState.isPlaying) {

      secondsLeftRef.current = pomodoroState.sessionTime * 60

      return
    }
    const interval = setInterval(() => {


      if (secondsLeftRef.current === 0) {

        changeModePomodoro()
      }


      tick()

    }, 1000);


    return () => clearInterval(interval)

  }, [pomodoroState.isPlaying, pomodoroState.sessionTime, pomodoroState.breakTime])



  const totalSeconds = mode === "work" ? pomodoroState.sessionTime * 60 : pomodoroState.breakTime * 60
  const percentage = Math.round(secondsLeft / totalSeconds * 100)

  const minutes = Math.floor(secondsLeft / 60)
  let seconds: string | number = secondsLeft % 60

  if (seconds < 10) { seconds = '0' + seconds.toString() }

  return (
    <div className="hero-item">
      <audio id="audio-alarm" src={`/alarm/${pomodoroState.name}`} loop></audio>



      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({ textColor: 'white', pathColor: mode === 'work' ? red : green, trailColor: 'transparent' })} />
      <div>
        <PlayButtonPomodoro play={play} pomodoroState={pomodoroState} />
        <PauseButtonPomodoro pomodoroState={pomodoroState} reset={reset} />
      </div>



    </div>
  )
}