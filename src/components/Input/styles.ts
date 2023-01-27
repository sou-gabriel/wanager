import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type StyledContainerProps = {
  isActive: boolean
}

export const Container = styled.TextInput<StyledContainerProps>`
  height: 56px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blue.default : '#D1D5DB'};
  border-radius: 8px;
  padding-left: ${RFValue(16)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme, isActive }) =>
    theme.fonts.inter[isActive ? 'medium' : 'regular']};
  color: ${({ theme, isActive }) => theme.colors.grey[isActive ? 600 : 300]};
`
