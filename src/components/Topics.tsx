import { TopicsContainer } from '../styles/Styles'
import { ITopics } from '../types/single_topic_details_type';
import { TopicsProps } from '../utils/defaultProps/defaults'
import SingleParagraph from './SingleParagraph'

const Topics = ({ selectedTopic, allTopics, dispatch }: ITopics) => {
  return (
    <TopicsContainer>
      {allTopics?.map((topic, index) => (
        <SingleParagraph
          key={topic.id}
          topic={topic}
          index={index}
          dispatch={dispatch}
          selectedTopic={selectedTopic}
        />
      ))}
    </TopicsContainer>
  )
}

export default Topics
Topics.defaultProps = TopicsProps
