import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type StyledNextStepButtonProps = {
  isActive: boolean
}

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Header = styled.View`
  margin-bottom: ${RFValue(32)}px;
`

export const Title = styled.Text`
  margin: ${RFValue(24)}px 0 ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: ${RFValue(24)}px;
  color: #4B5563;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(18)}px;
  color: #9CA3AF;

`

export const InputBlock = styled.View`
  margin-bottom: ${RFValue(16)}px;
`

export const Form = styled.View``

export const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const NexStepButton = styled.TouchableOpacity<StyledNextStepButtonProps>`
  width: 56px;
  margin-left: auto;
  padding: ${RFValue(12)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue.default};
  opacity: ${({ isActive }) => isActive ? 1 : 0.5};
`
