import styled from 'styled-components'

export const Button = styled.button`
  border-width: 0px;
  font-family:"Bree Serif"
  font-size:18px;
  width:80px;
  height:30px;
  font-weight:600;
  cursor:pointer;
  outline:none;
  align-self:flex-end;
`
export const ModalContainer = styled.div`
  background-color: #ffffff;
  margin: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ModalImg = styled.img`
  width: 300px;
  padding: 20px;
  @media (min-width: 768px) {
    width: 500px;
  }
`
export const CloseButton = styled(Button)`
  background-color: #ffffdd;
  font-size: 30px;
  align-self: flex-end;

  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
