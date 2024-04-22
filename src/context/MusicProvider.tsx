import { useReducer } from "react"
import { SoundState } from "../interfaces/interfaces"
import { MusicContext } from "./MusicContext"
import { musicReducer } from "../reducers/musicReducer"

const INITIAL_STATE: SoundState = {
  isPlaying: false,
  name: "musica-1.mp3",
  volume: 30
}

interface MusicProviderProps {
  children: JSX.Element | JSX.Element[]
}


export const MusicProvider = ({ children }: MusicProviderProps) => {

  const [musicState, dispatch] = useReducer(musicReducer, INITIAL_STATE)

  const playMusic = () => {
    dispatch({ type: "PLAY_MUSIC" })
  }

  const changeMusic = (value: string) => {
    dispatch({ type: "TYPE_MUSIC", payload: value })
  }

  const changeVolume = (value: number) => {
    dispatch({ type: "VOLUME_MUSIC", payload: value })
  }





  return (
    <MusicContext.Provider value={{ musicState, playMusic, changeMusic, changeVolume }}>{children}</MusicContext.Provider>
  )
}
