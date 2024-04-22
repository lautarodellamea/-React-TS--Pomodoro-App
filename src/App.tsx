import { Footer } from "./components/Footer"
import { Menu } from "./components/Menu"
import { Modal } from "./components/Modal"
import { Music } from "./components/Music"
import { Pomodoro } from "./components/Pomodoro"
import { Rain } from "./components/Rain"
import { Logo } from "./components/Logo"

export const App = () => {





  return (
    <>


      <Menu />



      <div className="hero">

        <Logo />


        <Pomodoro />
        <div className="hero-buttons">
          <Music />
          <Rain />
        </div>

        {/* <Pomodoro /> */}

        <Modal />

        <Footer />
      </div>



    </>
  )
}
