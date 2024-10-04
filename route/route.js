import Login from '../screens/Login'
import OpenScreen from '../screens/OpenScreen'
import Register from '../screens/register/Register'

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
        component: Register,
    },
]
