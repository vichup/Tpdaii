import Home from './src/screens/Home';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Login';
import PantallaPlato from './src/screens/PantallaPlato';
import Menu from './src/screens/Menu';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}
          options={() => ({
            title: "Login",
           
          })}
        />
        <Stack.Screen name='Home' component={Home}
          options={({navigation}) => ({
            title: "Home",
            
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.headerRight}>Ir a Login</Text>
              </TouchableOpacity>
            )
        })} />
        <Stack.Screen name='Plato' component={PantallaPlato}
          options={() => ({
            title: "Plato",
           
          })}
        />
        <Stack.Screen name='Menu' component={Menu}
          options={() => ({
            title: "Menu",
           
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
})
