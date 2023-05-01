export const getScreenPositions = (index = 0) => {
  const xPosition = Math.floor( Math.random() * (window.innerWidth - window.innerWidth / 3) )

  const yPosition = index * 23.5
  return { x: xPosition, y: yPosition }
};

export const getColor = (sentimentScore: number) => {
  if (sentimentScore > 60) return 'green'
  else if (sentimentScore < 40) return 'red'

  return 'gray';
};

export const getFontSize = (popularity: number) => {
  if (popularity >= 80) {
    return '23'
  } else if (popularity >= 70) {
    return '21'
  } else if (popularity >= 60) {
    return '19'
  } else if (popularity >= 55) {
    return '17'
  } else if (popularity >= 45) {
    return '15'
  }

  return '14'
};
