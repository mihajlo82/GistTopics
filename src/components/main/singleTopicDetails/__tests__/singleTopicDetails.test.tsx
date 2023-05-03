import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import SingleTopicDetails from '../SingleTopicDetails'

it('Show topic detials', () => {
  render(
    <SingleTopicDetails
      label='Name'
      volume={4}
      positive={2}
      neutral={1}
      negative={1}
    />
  )

  const paragraphsData = [
    'Information on topic "Name"',
    'Total Mentions: 4',
    'Positive Mentions: 2',
    'Neutral Mentions: 1',
    'Negative Mentions: 1',
  ]

  const topicDetails1 = screen.getByText(paragraphsData[0])
  const topicDetails2 = screen.getByText(paragraphsData[1])
  const topicDetails3 = screen.getByText(paragraphsData[2])
  const topicDetails4 = screen.getByText(paragraphsData[3])
  const topicDetails5 = screen.getByText(paragraphsData[4])

  expect(topicDetails1).toBeInTheDocument()
  expect(topicDetails2).toBeInTheDocument()
  expect(topicDetails3).toBeInTheDocument()
  expect(topicDetails4).toBeInTheDocument()
  expect(topicDetails5).toBeInTheDocument()
})
