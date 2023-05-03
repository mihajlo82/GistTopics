import styled from "styled-components";

export const CustomParagraph = styled.p`
  margin-top: 7px;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  color: ${(props) => props.styleParagraph.color};
  font-size: ${(props) => props.styleParagraph.fontSize}px;
  top: ${(props) => props.styleParagraph.top}px;
  left: ${(props) => props.styleParagraph.left}px;
  text-decoration: ${(props) =>
    props.styleParagraph.underline ? "underline" : "none"};
`;
