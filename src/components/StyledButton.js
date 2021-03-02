import styled, {  css } from 'styled-components'

export default styled.button`
  border-radius: 500%;
  padding: 200px;

  ${(props) => props.color && 
    css`
        background: ${(props) => props.theme[props.color]};
    `};

  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.fontSize};
  color: darkolivegreen;
`