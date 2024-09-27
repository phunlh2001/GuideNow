import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './components/BottomTab';
import HotTrending from './screens/HotTrending'
import OwnTripCreate from './screens/OwnTripCreate';
import OwnTripFill from './screens/OwnTripFill';
import OwnTripCombo from './screens/OwnTripCombo';
import OwnTripEdit from './screens/OwnTripEdit';
import OwnTripBill from './screens/OwnTripBill';
import OwnTripPromotion from './screens/OwnTripPromotion';
import OwnTripChooseCombo from './screens/OwnTripChooseCombo';
import OwnTripPayment from './screens/OwnTripPayment'
import OwnTripCountDown from './screens/OwnTripCountDown';
import OwnTripFound from './screens/OwnTripFound';
import OwnTripSuccess from './screens/OwnTripSuccess';

const Stack = createNativeStackNavigator()

function AfterLogin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BottomTab' component={BottomTab} />
      <Stack.Screen name='HotTrending' component={HotTrending} />
      <Stack.Screen name='OwnTripCreate' component={OwnTripCreate} />
      <Stack.Screen name='OwnTripFill' component={OwnTripFill} />
      <Stack.Screen name='OwnTripCombo' component={OwnTripCombo} />
      <Stack.Screen name='OwnTripEdit' component={OwnTripEdit} />
      <Stack.Screen name='OwnTripBill' component={OwnTripBill} />
      <Stack.Screen name='OwnTripPromotion' component={OwnTripPromotion} />
      <Stack.Screen name='OwnTripChooseCombo' component={OwnTripChooseCombo} />
      <Stack.Screen name='OwnTripPayment' component={OwnTripPayment} />
      <Stack.Screen name='OwnTripCountDown' component={OwnTripCountDown} />
      <Stack.Screen name='OwnTripFound' component={OwnTripFound} />
      <Stack.Screen name='OwnTripSuccess' component={OwnTripSuccess} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AfterLogin' component={AfterLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
