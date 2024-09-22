import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './components/BottomTab';
import AttractiveOffer from './screens/AttractiveOffer';

const Stack = createNativeStackNavigator()

function AfterLogin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BottomTab' component={BottomTab} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='BottomTab' component={AfterLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
