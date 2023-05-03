import { ITopic } from "../../reducer/types";

export interface ITopics {
    key?: string | number,
    selectedTopic: ITopic,
    allTopics: Array<ITopic>,
    dispatch: React.Dispatch<any>
  }
  