import { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

import { GoBackButton } from '../../../components/GoBackButton'
import { Input } from '../../../components/Input'
import { RootStackParamList } from '../../../routes/auth'

import * as S from './styles'

type SignInFirstStepProps = StackScreenProps<
RootStackParamList,
'SignInFirstStep'
>

type FormFieldNames = 'name' | 'email' | 'phone'

type FormValues = {
  name: string
  email: string
  phone: string
}

export const SignInFirstStep = ({ navigation }: SignInFirstStepProps) => {
  const { control } = useForm<FormValues>()
  const formFieldValues = useWatch({ control })
  const { colors } = useTheme()
  const [currentActiveInput, setCurrentActiveInput] = useState<FormFieldNames>()

  const formValues = Object.values(formFieldValues)
  const isFormFilled = formValues.length === 0 ? false : formValues.every(Boolean)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
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
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Nome"
                    value={value}
                    autoCapitalize="words"
                    onChangeText={onChange}
                    isActive={currentActiveInput === 'name'}
                    onFocus={() => setCurrentActiveInput('name')}
                  />
                )}
              />
            </S.InputBlock>

            <S.InputBlock>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="E-mail"
                    value={value}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={onChange}
                    isActive={currentActiveInput === 'email'}
                    onFocus={() => setCurrentActiveInput('email')}
                  />
                )}
              />
            </S.InputBlock>

            <S.InputBlock>
              <Controller
                name="phone"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="+00 (00) 00000-0000"
                    value={value}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    isActive={currentActiveInput === 'phone'}
                    onFocus={() => setCurrentActiveInput('phone')}
                  />
                )}
              />
            </S.InputBlock>
          </S.Form>

          <S.Footer>
            <S.NexStepButton
              isActive={isFormFilled}
              disabled={!isFormFilled}
              onPress={() =>
                navigation.navigate('SignInSecondStep', {
                  user: {
                    name: '',
                    email: '',
                    phone: ''
                  }
                })
              }
            >
              <Feather name="chevron-right" color={colors.white} size={24} />
            </S.NexStepButton>
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
