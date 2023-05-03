import { ITopic } from "../../../reducer/types"

export interface IPosition {
  x: number,
  y: number
}

export interface ISingleParagraph {
  key?: string | number,
  selectedTopic: ITopic,
  topic: ITopic,
  index: number,
  dispatch: React.Dispatch<any>
}

export interface IStyle {
  left: number,
  top: number,
  color: string,
  fontSize: string,
  underline?: boolean | number,
}
