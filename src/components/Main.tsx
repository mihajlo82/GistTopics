import { MainContainer } from '../styles/Styles'
import SingleTopicDetails from './SingleTopicDetails'
import useTopicReducer from './reducer/useTopicReducer'
import Topics from './Topics'

const Main = () => {
  const { state, dispatch } = useTopicReducer()

  return (
    <MainContainer>
      <Topics selectedTopic={state?.selectedTopic} allTopics={state?.topics} dispatch={dispatch} />

      {state?.selectedTopic?.id && 
        <SingleTopicDetails
          label={state?.selectedTopic?.label}
          volume={state?.selectedTopic?.volume}
          positive={state?.selectedTopic?.sentiment?.positive || 0}
          negative={state?.selectedTopic?.sentiment?.negative || 0}
          neutral={state?.selectedTopic?.sentiment?.neutral || 0}
        />
      }
    </MainContainer>
  )
}

export default Main
