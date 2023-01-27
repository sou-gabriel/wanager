import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Login } from '../screens/Login'
import { SignInFirstStep, SignInSecondStep } from '../screens/SignIn'

export type RootStackParamList = {
  Home: undefined
  Login: undefined
  SignInFirstStep: undefined
  SignInSecondStep: {
    user: {
      name: string
      email: string
      phone: string
    }
  }
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="SignInFirstStep" component={SignInFirstStep} />
      <Screen name="SignInSecondStep" component={SignInSecondStep} />
    </Navigator>
  )
}
