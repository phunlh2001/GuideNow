
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './components/BottomTab';
import HistoryTour from './screens/HistoryTour';
import HotTrending from './screens/HotTrending';
import OwnTripBill from './screens/OwnTripBill';
import OwnTripChooseCombo from './screens/OwnTripChooseCombo';
import OwnTripCombo from './screens/OwnTripCombo';
import OwnTripCountDown from './screens/OwnTripCountDown';
import OwnTripCreate from './screens/OwnTripCreate';
import OwnTripEdit from './screens/OwnTripEdit';
import OwnTripFill from './screens/OwnTripFill';
import OwnTripFound from './screens/OwnTripFound';
import OwnTripPayment from './screens/OwnTripPayment';
import OwnTripPromotion from './screens/OwnTripPromotion';
import OwnTripSuccess from './screens/OwnTripSuccess';
import Review from './screens/Review';
import TourGuideDetail from './screens/TourGuideDetail';
import { Avatar } from 'react-native-elements';
import DrawerGuide from './components/DrawerGuide';
import LoginAndSecurity from './screens/LoginAndSecurity';
import NotificationSetting from './screens/NotificationSetting';
import TermOfUse from './screens/TermOfUse';
import Policy from './screens/Policy';
import HowItWork from './screens/HowItWork';
import EnterPassword from './screens/EnterPassword';
import ResetPassword from './screens/ResetPassword';
import GeneralInfomation from './screens/GeneralInfotmation';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator()

function AfterLogin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTab'>
      <Stack.Screen name="DrawerGuide" component={DrawerGuide} />
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
      <Stack.Screen name='TourGuideDetail' component={TourGuideDetail} />
      <Stack.Screen name='Review' component={Review} />
      <Stack.Screen name='LoginAndSecurity' component={LoginAndSecurity} />
      <Stack.Screen name='NotificationSetting' component={NotificationSetting} />
      <Stack.Screen name='TermOfUse' component={TermOfUse} />
      <Stack.Screen name='Policy' component={Policy} />
      <Stack.Screen name='HowItWork' component={HowItWork} />
      <Stack.Screen name='EnterPassword' component={EnterPassword} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
      <Stack.Screen name='GeneralInfomation' component={GeneralInfomation} />
      <Stack.Screen name='Chat' component={Chat} />
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
