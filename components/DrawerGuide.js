import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import HistoryTour from '../screens/HistoryTour'
import BottomTab from './BottomTab'
import { useEffect, useState } from 'react'
import { getStorage } from '../utils/storage'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function UserView({ props }) {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        birthday: '',
        createAt: '',
        image: 'https://i.pinimg.com/564x/9d/4a/49/9d4a49b2b2b9392d3f844c4dbcff52d6.jpg',
        phoneNumber: '',
        username: '',
    })

    const getUserDetail = async () => {
        try {
            const res = await getStorage('account')
            if (res && res.data) {
                setUser(res.data)
            }
        } catch (error) {
            console.log('cannot get user from store', error)
        }
    }

    useEffect(() => {
        getUserDetail()
    }, [])

    return (
        <View style={styles.userContainer}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 10,
                }}
            >
                <Avatar rounded source={{ uri: user.image }} size="medium" />
                <View>
                    <Text style={styles.userName}>{user.fullName}</Text>
                    <Text style={styles.userPoints}>0 point</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.accountButton}
                onPress={() => props.navigation.navigate('Profile')}
            >
                <Text style={styles.accountButtonText}>Account Manage</Text>
            </TouchableOpacity>
        </View>
    )
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.drawerContent}
        >
            <UserView props={props} />
            <DrawerItem
                label="History"
                labelStyle={styles.drawerLabel}
                onPress={() => {
                    props.navigation.navigate('History')
                }}
            />
            <DrawerItem
                label="Notification"
                labelStyle={styles.drawerLabel}
                onPress={() => {
                    // Add your onPress logic here
                }}
            />
            <DrawerItem
                label="Customer Support"
                labelStyle={styles.drawerLabel}
                onPress={() => {
                    props.navigation.navigate('CSKH')
                }}
            />
            <Text style={styles.hotlineText}>Hotline: 019247474848</Text>
        </DrawerContentScrollView>
    )
}

function DrawerGuide() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerStyle: styles.drawerStyle,
            }}
        >
            <Stack.Screen
                name="Home"
                component={BottomTab}
                options={{
                    drawerItemStyle: { display: 'none' },
                }}
            />
            <Stack.Screen
                name="History"
                component={HistoryTour}
                options={{
                    drawerItemStyle: { display: 'none' },
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: '#247E5B',
        width: 280,
        padding: 30,
    },
    userContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    userName: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    userPoints: {
        fontSize: 14,
        color: COLORS.white,
    },
    accountButton: {
        backgroundColor: COLORS.mintGreen,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginTop: 20,
        marginLeft: 18,
    },
    accountButtonText: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
    },
    drawerContent: {
        flexGrow: 1,
    },
    drawerLabel: {
        fontSize: 16,
        color: COLORS.white,
    },
    hotlineText: {
        fontSize: 16,
        color: COLORS.white,
        marginBottom: 20,
        marginLeft: 18,
        marginTop: 20,
    },
})

export default DrawerGuide
