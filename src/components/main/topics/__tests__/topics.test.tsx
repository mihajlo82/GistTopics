import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Topics from '../Topics'
import { getInitialTopics, selectedTopic } from '../../../../getTopics'
import { ITopic } from '../../../reducer/types'

describe('Test topics', ()=>{
    let topics: Array<ITopic> = []

    beforeEach(() => topics = getInitialTopics())

    it('render topics component', ()=> {
            render(<Topics
                selectedTopic={selectedTopic}
                allTopics={topics} 
                dispatch={jest.fn()}    
            />)
        const topicsScreen = screen.getByRole('topics')
        expect(topicsScreen).toBeInTheDocument()
    })

    it('show data', ()=> {
        render(<Topics
            selectedTopic={selectedTopic}
            allTopics={topics} 
            dispatch={jest.fn()}    
        />)
    const topicsScreen = screen.getByRole('topics')
    expect(topicsScreen.childNodes).toHaveLength(topics.length)
})

})