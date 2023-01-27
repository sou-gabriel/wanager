import { StackScreenProps } from '@react-navigation/stack'
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native'
import { Controller, useForm, useWatch } from 'react-hook-form'

import { Button } from '../../../components/Button'
import { GoBackButton } from '../../../components/GoBackButton'
import { Input } from '../../../components/Input'
import { RootStackParamList } from '../../../routes/auth'

import * as S from './styles'
import { useState } from 'react'

type SignInSecondStepProps = StackScreenProps<
RootStackParamList,
'SignInSecondStep'
>

type FormFieldNames = 'cep' | 'state' | 'city' | 'neighborhood'

type FormValues = {
  cep: string
  state: string
  city: string
  neighborhood: string
}

export const SignInSecondStep = ({ navigation, route }: SignInSecondStepProps) => {
  const { control, handleSubmit } = useForm<FormValues>()
  const formFieldValues = useWatch({ control })
  const [currentActiveInput, setCurrentActiveInput] = useState<FormFieldNames>()

  const formValues = Object.values(formFieldValues)
  const isFormFilled =
    formValues.length === 0 ? false : formValues.every(Boolean)

  const onCreateAccount = (data: FormValues) => {
    const user = {
      ...route.params,
      address: data
    }

    console.log(user)

    // TODO: Cadastrar usuário na base de dados e logo após realizar o redirecionamento
    navigation.navigate('Login')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
        <S.Container>
          <S.Header>
            <GoBackButton onGoBack={navigation.goBack} />

            <S.Title>Crie sua conta</S.Title>
            <S.Subtitle>Bom, agora só falta seu endereço 😅</S.Subtitle>
          </S.Header>

          <S.Form>
            <S.InputBlock>
              <Controller
                name="cep"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="CEP"
                    value={value}
                    onChangeText={onChange}
                    isActive={currentActiveInput === 'cep'}
                    onFocus={() => setCurrentActiveInput('cep')}
                  />
                )}
              />
            </S.InputBlock>

            <S.InputBlock>
              <Controller
                name="state"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Estado"
                    value={value}
                    onChangeText={onChange}
                    isActive={currentActiveInput === 'state'}
                    onFocus={() => setCurrentActiveInput('state')}
                  />
                )}
              />
            </S.InputBlock>

            <S.InputBlock>
              <Controller
                name="city"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Cidade"
                    value={value}
                    onChangeText={onChange}
                    isActive={currentActiveInput === 'city'}
                    onFocus={() => setCurrentActiveInput('city')}
                  />
                )}
              />
            </S.InputBlock>
          </S.Form>

          <S.Footer>
            <Button
              title="Cadastrar conta"
              isActive={isFormFilled}
              disabled={!isFormFilled}
              onPress={handleSubmit(onCreateAccount)}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
