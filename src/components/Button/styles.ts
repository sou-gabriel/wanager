import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface StyledContainerProps {
  isActive: boolean
  primary: boolean
}

interface StyledTitleProps extends Pick<StyledContainerProps, 'primary'> {}

export const Container = styled.TouchableOpacity<StyledContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: ${RFValue(18)}px 0;
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.blue.default : 'transparent'};
  opacity: ${({ isActive }) => isActive ? 1 : 0.5};
`

export const Title = styled.Text<StyledTitleProps>`
  font-family: ${({ theme }) => theme.fonts.inter.semiBold};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.white : theme.colors.blue.default};
`
