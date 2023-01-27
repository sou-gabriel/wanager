import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth'

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}
