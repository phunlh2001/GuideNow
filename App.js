import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { listRoute } from './route/route.js'
const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="openScreen">
                {listRoute.map((val) => (
                    <Stack.Screen
                        key={val.id}
                        name={val.name}
                        component={val.component}
                        options={{ headerShown: false }}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
