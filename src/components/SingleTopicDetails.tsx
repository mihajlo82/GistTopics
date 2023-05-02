import React from 'react'
import { ParagraphDetails, TopicsDetailsContainer } from '../styles/Styles'
import { ITopicDetails } from '../types/single_topic_details_type';
import { SingleTopicDetailsProps } from '../utils/defaultProps/defaults'

const SingleTopicDetails = ({ label, volume, positive, neutral, negative }: ITopicDetails) => {
  return (
    <TopicsDetailsContainer isSideBorderShown={label}>
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
