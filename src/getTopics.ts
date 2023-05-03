import { ITopic } from './components/reducer/types'

export const selectedTopic: ITopic = {  id : '213', volume: 30,  sentimentScore: 20, label: 'Test',  sentiment: { positive:0, negative: 10, neutral: 10 } }

const fakeTopics: Array<ITopic> = [
    {  id : '1', volume: 10,  sentimentScore: 10, label: 'Test',  sentiment: { positive:0, negative: 0, neutral: 10 } },
    {  id : '2', volume: 20,  sentimentScore: 20, label: 'Test',  sentiment: { positive:0, negative: 10, neutral: 10 } },
    {  id : '3', volume: 30,  sentimentScore: 30, label: 'Test',  sentiment: { positive:20, negative: 5, neutral: 5 } },
    {  id : '4', volume: 40,  sentimentScore: 40, label: 'Test',  sentiment: { positive:20, negative: 10, neutral: 10 } },
    {  id : '5', volume: 50,  sentimentScore: 50, label: 'Test',  sentiment: { positive:30, negative: 10, neutral: 10 } }
]

export function getInitialTopics (): Array<ITopic> { return fakeTopics }
