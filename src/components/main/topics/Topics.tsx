import React from 'react'
import { TopicsContainer } from './styles'
import { TopicsProps } from '../../../utils/defaultProps/defaults'
import SingleParagraph from './singleParagraph/SingleParagraph'
import { ITopics } from './types';

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
