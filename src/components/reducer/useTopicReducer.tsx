import axios from 'axios'
import { useCallback, useEffect, useReducer } from 'react'
import { ACTION_REDUCER,  ERROR_MESSAGE,  RESPONSE_API } from '../../constants/data_constants.js'
import { FETCH_URL } from '../../constants/data_constants.js'
import { ACTION_TYPE, IInitialState } from '../../types/types.js'

const intialState: IInitialState = {
  topics: [],
  selectedTopic: {},
}

const reducer = (state = intialState, action: ACTION_TYPE): IInitialState => {
  const { type, payload } = action 

  switch (type) {
    case ACTION_REDUCER.FETCH_DATA:
      return { ...state, topics: payload }
    case ACTION_REDUCER.SELECT_TOPIC:
      return { ...state, selectedTopic: payload }
    default:
      return state
  }
}

const useTopicReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState)

  useEffect(() =>  getData(), [])

  const getData = useCallback(() => {
    axios
      .get(FETCH_URL)
      .then( response => {
        if ( response.status === RESPONSE_API.TWO_HUNDRED && response.statusText === RESPONSE_API.OK ) {
          dispatch({ type: ACTION_REDUCER.FETCH_DATA, payload: response?.data })
        }else {
          window.alert(ERROR_MESSAGE)
        }
      })
      .catch( error => window.alert(error) )
  }, [])

  return { state, dispatch }
}

export default useTopicReducer
