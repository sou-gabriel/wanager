import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Header = styled.View`
  margin-bottom: ${RFValue(24)}px;
`

export const Content = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  margin-bottom: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: ${RFValue(24)}px;
  color: #4B5563;
`

export const Subtitle = styled.Text`
  margin-bottom: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${RFValue(18)}px;
  color: #9CA3AF;
`

export const InputBlock = styled.View`
  margin-bottom: ${RFValue(16)}px;
`

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const FormHeader = styled.View``

export const FormContent = styled.View``

export const FormFooter = styled.View``
