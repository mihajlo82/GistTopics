export const TopicsProps = {
  state: {},
  dispatch: () => {},
  selectedTopic: {},
};

export const SingleTopicDetailsProps = {
  label: '',
  volume: 0,
  positive: 0,
  neutral: 0,
  negative: 0,
};

export const SingleParagraphProps = {
  topic: {},
  index: 0,
  dispatch: () => {},
  selectedTopic: {},
};

export const SingleParagraphStyle = {
    left: 0, 
    top: 0, 
    color:'black', 
    fontSize:'14'
}

export const InitialSelectedTopic = {
    key: Math.random(),
    id: Math.random().toString(),
    volume: 0,
    sentimentScore: 0,
    type: '',
    label: '',
    sentiment: {},
    burst: 0,
    days:[],
    pageType: [],
    queries:[] 
}