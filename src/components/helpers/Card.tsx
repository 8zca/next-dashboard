import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0px 4px 16px rgba(212, 212, 213, 0.25);
  border-radius: 8px;
  padding: 24px;
  background ${(props) => props.theme.colors.bg.contrast};
`

export default Wrapper
