import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import * as S from './styles'

type GoBackButtonProps = {
  onGoBack: () => void
}

export const GoBackButton = ({ onGoBack }: GoBackButtonProps) => {
  const { colors } = useTheme()

  return (
    <S.Container onPress={onGoBack}>
      <Feather name="chevron-left" size={24} color={colors.grey[300]} />
      <S.Title>Voltar</S.Title>
    </S.Container>
  )
}
