import { StackScreenProps } from '@react-navigation/stack'

import FullLogo from '../../assets/full-logo.svg'
import { Button } from '../../components/Button'
import { RootStackParamList } from '../../routes/auth'

import * as S from './styles'

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>

export const Home = ({ navigation }: HomeProps) => {
  return (
    <S.Container>
      <FullLogo />

      <S.Footer>
        <Button
          title="Criar minha conta"
          onPress={() => navigation.navigate('SignInFirstStep')}
        />

        <Button
          primary={false}
          title="Fazer login"
          onPress={() => navigation.navigate('Login')}
        />
      </S.Footer>
    </S.Container>
  )
}
