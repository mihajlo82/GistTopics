import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import SingleParagraph from '../SingleParagraph'
import { selectedTopic } from '../../../../../getTopics'

it('Render single paragraph', () => {
    render(
      <SingleParagraph
        topic={selectedTopic}
        index={0}
        selectedTopic={selectedTopic}
        dispatch={jest.fn()}
      />
    )

    const paragraph = screen.getByRole('customParagraph')
    expect(paragraph).toBeInTheDocument()
  }) 

