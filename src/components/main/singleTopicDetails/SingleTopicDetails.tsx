import React from 'react'
import { ParagraphDetails, TopicsDetailsContainer } from './styles'
import { ITopicDetails } from './types';
import { SingleTopicDetailsProps } from '../../../utils/defaultProps/defaults'

const SingleTopicDetails = ({ label, volume, positive, neutral, negative }: ITopicDetails) => {
  return (
    <TopicsDetailsContainer isSideBorderShown={label} role='topicDetails'>
      <ParagraphDetails> Information on topic "{label}" </ParagraphDetails>  <br />
      <ParagraphDetails> Total Mentions: {volume} </ParagraphDetails> <br />
      <ParagraphDetails color={1}> Positive Mentions: {positive} </ParagraphDetails>
      <ParagraphDetails> Neutral Mentions: {neutral} </ParagraphDetails>
      <ParagraphDetails color={2}> Negative Mentions: {negative} </ParagraphDetails>
    </TopicsDetailsContainer>
  )
}

export default SingleTopicDetails
SingleTopicDetails.defaultProps = SingleTopicDetailsProps
