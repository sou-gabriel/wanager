import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`
