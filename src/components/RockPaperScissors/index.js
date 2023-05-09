import {Component} from 'react'

import {
  BgContainer,
  ScoreContainer,
  Container,
  ChoiceText,
  ScoreBoard,
  ScoreText,
  Score,
} from './styledComponents'

import PlayingView from '../PlayingView'
import RulesPopup from '../RulesPopup'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    userChoiceId: '',
    opponentChoiceId: '',
  }

  getOponentChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3)
    return choicesList[randomIndex].id
  }

  checkResults = id => {
    const opponentId = this.getOponentChoice()
  }

  render() {
    const {score} = this.state

    return (
      <BgContainer>
        <ScoreContainer>
          <Container>
            <ChoiceText>ROCK</ChoiceText>
            <ChoiceText>PAPER</ChoiceText>
            <ChoiceText>SCISSORS</ChoiceText>
          </Container>
          <ScoreBoard>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreBoard>
        </ScoreContainer>
        <PlayingView choicesList={choicesList} />
        <RulesPopup />
      </BgContainer>
    )
  }
}

export default RockPaperScissors
