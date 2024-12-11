import Login from '../screens/Login'
import OpenScreen from '../screens/OpenScreen'
import Register from '../screens/register/Register'
import DrawerGuide from '../components/DrawerGuide'
import Chat from '../screens/Chat'
import EnterPassword from '../screens/EnterPassword'
import GeneralInfomation from '../screens/GeneralInfotmation'
import HotTrending from '../screens/HotTrending'
import HowItWork from '../screens/HowItWork'
import LoginAndSecurity from '../screens/LoginAndSecurity'
import NotificationSetting from '../screens/NotificationSetting'
import OwnTripBill from '../screens/OwnTripBill'
import OwnTripChooseCombo from '../screens/OwnTripChooseCombo'
import OwnTripCombo from '../screens/OwnTripCombo'
import OwnTripCountDown from '../screens/OwnTripCountDown'
import OwnTripCreate from '../screens/OwnTripCreate'
import OwnTripEdit from '../screens/OwnTripEdit'
import OwnTripFill from '../screens/OwnTripFill'
import OwnTripFound from '../screens/OwnTripFound'
import OwnTripPayment from '../screens/OwnTripPayment'
import OwnTripPromotion from '../screens/OwnTripPromotion'
import OwnTripSuccess from '../screens/OwnTripSuccess'
import Policy from '../screens/Policy'
import ResetPassword from '../screens/ResetPassword'
import Review from '../screens/Review'
import TermOfUse from '../screens/TermOfUse'
import TourGuideDetail from '../screens/TourGuideDetail'
import Photo from '../screens/register/components/Photo'
import PlaceDetail from '../screens/PlaceDetail'
import ForgotPassword from '../screens/ForgotPassword'
import HistoryTour from '../screens/HistoryTour'
import CSKH from '../screens/CSKH'

export const routes = [
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
    {
        id: 4,
        name: 'DrawerGuide',
        component: DrawerGuide,
    },
    {
        id: 5,
        name: 'HotTrending',
        component: HotTrending,
    },
    {
        id: 6,
        name: 'OwnTripCreate',
        component: OwnTripCreate,
    },
    {
        id: 7,
        name: 'OwnTripFill',
        component: OwnTripFill,
    },
    {
        id: 8,
        name: 'OwnTripCombo',
        component: OwnTripCombo,
    },
    {
        id: 9,
        name: 'OwnTripEdit',
        component: OwnTripEdit,
    },
    {
        id: 10,
        name: 'OwnTripBill',
        component: OwnTripBill,
    },
    {
        id: 11,
        name: 'OwnTripPromotion',
        component: OwnTripPromotion,
    },
    {
        id: 12,
        name: 'OwnTripChooseCombo',
        component: OwnTripChooseCombo,
    },
    {
        id: 13,
        name: 'OwnTripPayment',
        component: OwnTripPayment,
    },
    {
        id: 14,
        name: 'OwnTripCountDown',
        component: OwnTripCountDown,
    },
    {
        id: 15,
        name: 'OwnTripFound',
        component: OwnTripFound,
    },
    {
        id: 16,
        name: 'OwnTripSuccess',
        component: OwnTripSuccess,
    },
    {
        id: 17,
        name: 'TourGuideDetail',
        component: TourGuideDetail,
    },
    {
        id: 18,
        name: 'Review',
        component: Review,
    },
    {
        id: 19,
        name: 'LoginAndSecurity',
        component: LoginAndSecurity,
    },
    {
        id: 20,
        name: 'NotificationSetting',
        component: NotificationSetting,
    },
    {
        id: 21,
        name: 'TermOfUse',
        component: TermOfUse,
    },
    {
        id: 22,
        name: 'Policy',
        component: Policy,
    },
    {
        id: 23,
        name: 'HowItWork',
        component: HowItWork,
    },
    {
        id: 24,
        name: 'EnterPassword',
        component: EnterPassword,
    },
    {
        id: 25,
        name: 'ResetPassword',
        component: ResetPassword,
    },
    {
        id: 26,
        name: 'GeneralInfomation',
        component: GeneralInfomation,
    },
    {
        id: 27,
        name: 'Chat',
        component: Chat,
    },
    {
        id: 28,
        name: 'Photo',
        component: Photo,
    },
    {
        id: 29,
        name: 'PlaceDetail',
        component: PlaceDetail,
    },
    {
        id: 30,
        name: 'ForgotPassword',
        component: ForgotPassword,
    },
    {
        id: 31,
        name: 'HistoryTour',
        component: HistoryTour,
    },
    {
        id: 32,
        name: 'CSKH',
        component: CSKH,
    },
]
