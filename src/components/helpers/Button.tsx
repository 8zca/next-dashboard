import styled from 'styled-components'

export default styled.button`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  outline: none;
  height: 40px;
  font-size: 16px;
  border: none;
  color: ${(props) => props.theme.colors.text.contrast};
  background: ${(props) => props.theme.colors.text.link};
  &:hover,
  &:active {
    opacity: 0.7;
  }
`
