import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routes } from './routes'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

const Stack = createNativeStackNavigator()

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 14,
                fontWeight: '400',
            }}
            style={{ borderLeftColor: 'green' }}
        />
    ),

    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 14,
            }}
            style={{ borderLeftColor: 'red' }}
        />
    ),
}

function AfterLogin() {
    return (
        <>
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
            <Toast config={toastConfig} />
        </>
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
