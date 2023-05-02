import React from 'react'
import { useEffect, useState } from 'react'
import { getScreenPositions, getColor, getFontSize } from '../utils/function_generator'
import { ACTION_REDUCER } from '../constants/data_constants'
import { CustomParagraph } from '../styles/Styles'
import { SingleParagraphProps, SingleParagraphStyle } from '../utils/defaultProps/defaults'
import { IPosition, ISingleParagraph, IStyle } from '../types/single_paragraph_type'

const SingleParagraph = ({ selectedTopic, topic, index, dispatch }: ISingleParagraph) => {
  const [styleParagraph, setStyleParagraph] = useState<IStyle>(SingleParagraphStyle)

  useEffect(() => {
    const positions: IPosition = getScreenPositions(index)
    const color: string = getColor(topic?.sentimentScore)
    const fontSize: string = getFontSize(topic?.sentimentScore)

    setStyleParagraph({ left: positions.x, top: positions.y, color, fontSize })
  }, [topic, index])

  useEffect(() => setStyleParagraph({ ...styleParagraph, underline: selectedTopic?.id === topic?.id }), [selectedTopic?.id, topic?.id ])

  return (
    <CustomParagraph
      styleParagraph={styleParagraph}
      onClick={() => dispatch({ type: ACTION_REDUCER.SELECT_TOPIC, payload: topic })}
    > {topic.label}
    </CustomParagraph>
  )
}

export default SingleParagraph
SingleParagraph.defaultProps = SingleParagraphProps
