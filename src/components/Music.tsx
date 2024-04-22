import { useEffect } from "react"
import { useMusic } from "../hooks/useMusic"


export const Music = () => {

  const { playMusic, musicState } = useMusic()




  useEffect(() => {


    const isPlaying = () => {

      const audioMusicElement = document.getElementById("audio-music") as HTMLAudioElement

      if (musicState.isPlaying) {
        audioMusicElement.play()
        audioMusicElement.currentTime = 0
      } else {
        audioMusicElement.pause()
      }
    }
    isPlaying()



  }, [musicState])



  return (
    <div className="hero-item">
      <audio id="audio-music" src={`/music/${musicState.name}`} loop></audio>

      <svg className={musicState.isPlaying ? "svg svg-active" : "svg"} width="63" height="63" viewBox="0 0 63 63" fill="none" >
        <path d="M21 45.9375C21 49.5619 18.0619 52.5 14.4375 52.5C10.8131 52.5 7.875 49.5619 7.875 45.9375C7.875 42.3132 10.8131 39.375 14.4375 39.375C18.0619 39.375 21 42.3132 21 45.9375ZM21 45.9375V18.1472C21 16.7895 22.0353 15.6559 23.3873 15.533L47.0124 13.3853C48.5496 13.2455 49.875 14.4559 49.875 15.9995V43.3125M49.875 43.3125C49.875 46.9369 46.9368 49.875 43.3125 49.875C39.6882 49.875 36.75 46.9369 36.75 43.3125C36.75 39.6882 39.6882 36.75 43.3125 36.75C46.9368 36.75 49.875 39.6882 49.875 43.3125Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className={musicState.isPlaying ? "btn btn-active" : "btn"} id="btn-music" onClick={playMusic} ><div className="btn-circle"></div></div>




      {/* <pre>{JSON.stringify(musicState, null, 2)}</pre> */}
    </div>
  )
}
