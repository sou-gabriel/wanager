import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  margin-left: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${RFValue(16)}px;
`
