import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Button, ModalContainer, ModalImg, CloseButton} from './styledComponents'

const RulesPopup = () => (
  <Popup trigger={<Button>Rules</Button>} modal position="center">
    {close => (
      <ModalContainer>
        <CloseButton onClick={close}>
          <RiCloseLine />
        </CloseButton>
        <ModalImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </ModalContainer>
    )}
  </Popup>
)

export default RulesPopup
