import Login from '../screens/login/login.js'
import OpenScreen from '../screens/OpenScreen/OpenScreen.js'
import { RegisterSteps } from '../screens/registerStep/page.js'

export const listRoute = [
    {
        id: 1,
        name: 'openscreen',
        component: OpenScreen,
    },
    {
        id: 2,
        name: 'login',
        component: Login,
    },
    {
        id: 3,
        name: 'register',
        component: RegisterSteps,
    },
]
