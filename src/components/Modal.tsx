
import { useUI } from "../hooks/useUI"
import "../styles/modal.css"
export const Modal = () => {

  const { UIState, setModalInfo } = useUI()

  const { modalInfo } = UIState

  const handleModalClick = (e: React.MouseEvent) => {
    // Evita que el evento se propague al contenedor modal
    e.stopPropagation()
  }

  const handleContainerClick = () => {
    setModalInfo()
  }
  return (
    <div onClick={handleContainerClick} className={`modal-container ${modalInfo ? 'show' : ''}`}>
      <div onClick={handleModalClick} className="modal">
        <p>Aplicación diseñada para acompañarte durante tus actividades diarias. Cuenta con diferentes sonidos de lluvia y música, que proporcionan un ambiente tranquilo y sereno mientras te concentras en tu trabajo, estudio o cualquier otra actividad. Es una experiencia auditiva que puede ayudarte a reducir el estrés, mejorar la concentración y promover la relajación.
        </p>
      </div>

    </div>
  )
}