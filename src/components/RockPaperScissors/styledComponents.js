import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
`

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
`
export const ScoreContainer = styled.div`
  width: 100%;
  border: 2px solid #ffffff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 600px;
  }
`
export const ChoiceText = styled.p`
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;

  padding: 0px;
  margin: 0px;
`
export const ScoreBoard = styled(Container)`
  background-color: #ffffff;
  border-radius: 10px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  font-size: 25px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  margin: 0px;
  padding: 0px;
`
