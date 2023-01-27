import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  primary?: boolean
  isActive?: boolean
}

export const Button = ({ title, isActive = true, primary = true, ...rest }: ButtonProps) => {
  return (
    <S.Container isActive={isActive} primary={primary} {...rest}>
      <S.Title primary={primary}>{title}</S.Title>
    </S.Container>
  )
}
