import { View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { GoBackButton } from '../../components/GoBackButton'
import { RootStackParamList } from '../../routes/auth'

import * as S from './styles'

type LoginProps = StackScreenProps<RootStackParamList, 'Login'>

export const Login = ({ navigation }: LoginProps) => {
  return (
    <S.Container>
      <S.Header>
        <GoBackButton onGoBack={navigation.goBack} />
      </S.Header>

      <S.Content>
        <S.Form>
          <View>
            <S.FormHeader>
              <S.Title>Entrar</S.Title>
              <S.Subtitle>
                Realize o login para utilizar nosso{'\n'}aplicativo
              </S.Subtitle>
            </S.FormHeader>

            <S.FormContent>
              <S.InputBlock>
                <Input placeholder="E-mail" />
              </S.InputBlock>

              <S.InputBlock>
                <Input placeholder="Senha" secureTextEntry />
              </S.InputBlock>
            </S.FormContent>
          </View>

          <S.FormFooter>
            <Button title="Entrar" />
          </S.FormFooter>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
