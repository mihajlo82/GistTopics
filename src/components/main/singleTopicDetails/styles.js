import styled from 'styled-components'

export const TopicsDetailsContainer = styled.section`
  width: 20vw;
  overflow: auto;
  padding-top: 100px;
  padding-left: 20px;
  border-left: ${props=> props.isSideBorderShown ? '1px ' : '0px'} solid black;
`;

export const ParagraphDetails = styled.p`
  color: ${props => props.color === 1 ? 'green' : (props.color === 2 ? 'red': 'black')  };
  font-size: 16px;
  font-weight: bold;
`;