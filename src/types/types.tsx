export interface IInitialState {
  topics: Array<ITopic> | any,
  selectedTopic: ITopic | any
}

export interface ISentiment {
  negative: number,
  neutral: number,
  positive: number
}

export interface IDay {
  date?: string,
  volume?: number
}
export interface IPageType {
  blog?: number,
  facebook?: number,
  forum?: number,
  general?: number,
  image?: number,
  news?: number,
  review?: number,
  twitter?: number,
  video?: number
}

export interface IQueries {
  id?: number | string,
  name?: string,
  volume?: number
}
export interface ITopic {
  key?: string | number,
  id: string,
  volume: number,
  sentimentScore: number,
  type?: string,
  label: string,
  sentiment: ISentiment,
  burst?: number,
  days?: Array<IDay>,
  pageType?: Array<IPageType>,
  queries?: Array<IQueries>
}

export interface ACTION_TYPE {
  type: string,
  payload?: Array<ITopic> | string | ITopic | number
}

