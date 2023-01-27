import { TextInputProps } from 'react-native'

import * as S from './styles'

type InputProps = TextInputProps & {
  isActive?: boolean
}

export const Input = ({ isActive = false, ...rest }: InputProps) => {
  return (
    <S.Container isActive={isActive} {...rest} />
  )
}
