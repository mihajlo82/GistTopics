import styled from 'styled-components'

export const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
`;

export const TopicsContainer = styled.section`
  width: 80vw;
  height: 100vh;
  position: relative;
  overflow: auto;
`;

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

export const CustomParagraph = styled.p`
  margin-top: 7px;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  color: ${(props) => props.styleParagraph.color};
  font-size: ${(props) => props.styleParagraph.fontSize}px;
  top: ${(props) => props.styleParagraph.top}px;
  left: ${(props) => props.styleParagraph.left}px;
  text-decoration: ${(props) => props.styleParagraph.underline ? 'underline' : 'none'}
`;
