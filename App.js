import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routes } from './routes'

const Stack = createNativeStackNavigator()

function AfterLogin() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="BottomTab"
        >
            {routes.map((val) => (
                <Stack.Screen
                    key={val.id}
                    name={val.name}
                    component={val.component}
                    options={{ headerShown: false }}
                />
            ))}
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AfterLogin" component={AfterLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
