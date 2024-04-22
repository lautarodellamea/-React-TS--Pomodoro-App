import { useContext } from "react"
import { MusicContext } from "../context/MusicContext"


export const useMusic = () => {

  const { musicState, playMusic, changeMusic, changeVolume } = useContext(MusicContext)




  return {
    musicState,
    playMusic,
    changeMusic,
    changeVolume
  }


}
