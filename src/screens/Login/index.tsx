import { useState } from 'react'
import { View } from 'react-native'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { StackScreenProps } from '@react-navigation/stack'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { GoBackButton } from '../../components/GoBackButton'
import { RootStackParamList } from '../../routes/auth'

import * as S from './styles'

type LoginProps = StackScreenProps<RootStackParamList, 'Login'>

type FormFieldNames = 'email' | 'password'

type FormValues = {
  email: string
  password: string
}

export const Login = ({ navigation }: LoginProps) => {
  const { control } = useForm<FormValues>()
  const formFieldValues = useWatch({ control })
  const [currentActiveInput, setCurrentActiveInput] =
    useState<FormFieldNames>()

  const formValues = Object.values(formFieldValues)
  const isFormFilled =
    formValues.length === 0 ? false : formValues.every(Boolean)

  return (
    <S.Container>
      <S.Header>
        <GoBackButton onGoBack={() => navigation.navigate('Home')} />
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
                <Controller
                  name="email"
                  control={control}
                  render={() => (
                    <Input
                      placeholder="E-mail"
                      isActive={currentActiveInput === 'email'}
                      onFocus={() => setCurrentActiveInput('email')}
                      autoCapitalize="none"
                    />
                  )}
                />
              </S.InputBlock>

              <S.InputBlock>
                <Controller
                  name="password"
                  control={control}
                  render={() => (
                    <Input
                      placeholder="Senha"
                      isActive={currentActiveInput === 'password'}
                      onFocus={() => setCurrentActiveInput('password')}
                      autoCapitalize="none"
                      secureTextEntry
                    />
                  )}
                />
              </S.InputBlock>
            </S.FormContent>
          </View>

          <S.FormFooter>
            <Button
              title="Entrar"
              isActive={isFormFilled}
              disabled={!isFormFilled}
            />
          </S.FormFooter>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
