import { ITopic } from "./types"

export interface ITopicDetails {
    label: string, 
    volume: number, 
    positive: number, 
    neutral: number, 
    negative: number
  }

//Topics FILE
export interface ITopics {
    key?: string | number,
    selectedTopic: ITopic,
    allTopics: Array<ITopic>,
    dispatch: React.Dispatch<any>
  }