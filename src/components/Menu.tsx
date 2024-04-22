
import { ControlsMusic } from "./ControlsMusic"
import { ControlsRain } from "./ControlsRain"
import { BtnModal } from "./BtnModal"
import { BtnMenu } from "./BtnMenu"
import { useUI } from "../hooks/useUI"
import { ControlsPomodoro } from "./ControlsPomodoro"



export const Menu = () => {

  const { setMenuPanel } = useUI()

  const { UIState: { menuPanel } } = useUI()

  return (
    <>

      <BtnModal />

      <BtnMenu />


      <div onClick={setMenuPanel} className={`menu-capa ${menuPanel ? "menu-active" : ""}`}>
      </div>

      <nav className={`menu ${menuPanel ? "menu-active" : ""}`}>
        <div className="menu-item">
          <h3>Música</h3>
          <ControlsMusic />
        </div>
        <div className="menu-item">
          <h3>Lluvia</h3>
          <ControlsRain />
        </div>
        <div className="menu-item">
          <h3>Pomodoro</h3>
          <ControlsPomodoro />
        </div>
      </nav>
    </>

  )
}
