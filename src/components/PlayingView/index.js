import {
  ChoicesContainer,
  ChoiceItem,
  ChoiceButton,
  ChoiceImg,
} from './styledComponents'

const PlayingView = props => {
  const {choicesList, checkResults} = props
  const {id} = choicesList

  const onClickChoiceButton = () => {
    checkResults(id)
  }

  return (
    <ChoicesContainer>
      {choicesList.map(eachChoiceObj => (
        <ChoiceItem key={eachChoiceObj.id}>
          <ChoiceButton>
            <ChoiceImg src={eachChoiceObj.imageUrl} alt="image" />
          </ChoiceButton>
        </ChoiceItem>
      ))}
    </ChoicesContainer>
  )
}

export default PlayingView
