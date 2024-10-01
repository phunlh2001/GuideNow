import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Profiler, useEffect, useState } from 'react'
import {
    Animated,
    Dimensions,
    Keyboard,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLOS from '../constants/color'
import HomePage from '../screens/HomePage'
import AttractiveOffer from '../screens/AttractiveOffer'
import LocalTour from '../screens/LocalTour'
import OwnTripPayment from '../screens/OwnTripPayment'
import OwnTripSuccess from '../screens/OwnTripSuccess'
import PersonProfile from '../screens/PersonProfile'

const tabs = [
    {
        id: 1,
        name: 'HomePage',
        component: HomePage,
        label: 'Home',
        icon: 'home',
        inActiveIcon: 'home-outline',
    },
    {
        id: 2,
        name: 'Chat',
        component: OwnTripPayment,
        label: 'Chat',
        icon: 'chatbubble-ellipses',
        inActiveIcon: 'chatbubble-ellipses-outline',
    },
    {
        id: 6,
        name: 'Tour',
        component: LocalTour,
        label: 'Tour',
        icon: 'podium',
        inActiveIcon: 'podium-outline',
    },
    {
        id: 3,
        name: 'Offer',
        component: AttractiveOffer,
        label: 'Offer',
        icon: 'gift',
        inActiveIcon: 'gift-outline',
    },
    {
        id: 4,
        name: 'Profile',
        component: PersonProfile,
        label: 'Person',
        icon: 'person',
        inActiveIcon: 'person-outline',
    },
]

const Tab = createBottomTabNavigator()
const { width } = Dimensions.get('window')

const MARGIN = 12.5
const TAB_BAR_WIDTH = width - 2 * MARGIN
const TAB_WIDTH = TAB_BAR_WIDTH / tabs.length

const TabIcon = ({ isFocused, tabIcon, label, index, isMiddle }) => {
    const [translateY] = useState(new Animated.Value(0))
    const translateIcon = (value) => {
        Animated.spring(translateY, {
            toValue: value,
            useNativeDriver: true,
        }).start()
    }

    // useEffect(() => {
    //     if (isFocused && !isMiddle) translateIcon(-14)
    //     else translateIcon(0)
    // }, [index])

    return (
        <>
            <Animated.View style={{ transform: [{ translateY }] }}>
                {isMiddle ? (
                    <Ionicons
                        name={tabIcon.activeIcon}
                        size={38}
                        color={COLOS.primary}
                    />
                ) : (
                    <Ionicons
                        name={tabIcon.activeIcon}
                        size={28}
                        color={isFocused ? COLOS.white : COLOS.lightgreen}
                    />
                )}
            </Animated.View>
        </>
    )
}

const TabBar = ({ state, descriptors, navigation }) => {
    const [translateX] = useState(new Animated.Value(0))
    const translateTab = (index) => {
        Animated.spring(translateX, {
            toValue: index * TAB_WIDTH,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        translateTab(state.index)
    }, [state.index])

    const [keyboardVisible, setKeyboardVisible] = useState(false)
    const [tabBarBottom] = useState(new Animated.Value(MARGIN)) // Initial bottom margin

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            Animated.timing(tabBarBottom, {
                toValue: -100, // Move tab bar out of screen
                duration: 500,
                useNativeDriver: false,
            }).start(() => setKeyboardVisible(true))
        })
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            Animated.timing(tabBarBottom, {
                toValue: MARGIN, // Restore tab bar position
                duration: 500,
                useNativeDriver: false,
            }).start(() => setKeyboardVisible(false))
        })

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    return (
        <Animated.View style={[styles.tabBarContainer, { bottom: tabBarBottom }]}>
            <Animated.View style={styles.slidingTabContainer}>
                <Animated.View
                    style={[styles.slidingTab, { transform: [{ translateX }] }]}
                />
            </Animated.View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                const tabBarIcon = options.tabBarIcon
                const isMiddle = index === Math.floor(tabs.length / 2)

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused && { selected: true }}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            styles.normalButton,
                            isMiddle && styles.middleButton,
                        ]}
                    >
                        {isMiddle ? (
                            <TabIcon
                                tabIcon={tabBarIcon}
                                isFocused={isFocused}
                                index={state.index}
                                //label={label}
                                isMiddle={isMiddle}
                            />
                        ) : (<TabIcon
                            tabIcon={tabBarIcon}
                            isFocused={isFocused}
                            label={label}
                            index={state.index}
                        />)}
                    </TouchableOpacity>
                )
            })}
        </Animated.View>
    )
}

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                header: () => null,
                tabBarHideOnKeyboard: true,
            }}
            tabBar={(props) => <TabBar {...props} />}
        >
            {tabs.map((tab, index) => (
                <Tab.Screen
                    key={index}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        tabBarShowLabel: false,
                        tabColor: COLOS.primary,
                        tabBarIcon: {
                            activeIcon: tab.icon,
                            inActiveIcon: tab.inActiveIcon,
                        },
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        width: '94%',
        height: 60,
        position: 'absolute',
        alignSelf: 'center',
        bottom: MARGIN,
        backgroundColor: COLOS.primary,
        elevation: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    slidingTabContainer: {
        width: TAB_WIDTH,
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
    },
    slidingTab: {
        width: 45,
        backgroundColor: COLOS.white,
        bottom: -50,
        borderWidth: 1,
        borderColor: COLOS.white,
    },
    normalButton: {
        flex: 1,
        alignItems: "center"
    },
    middleButton: {
        height: 70,
        width: 70,
        borderRadius: 1000,
        marginBottom: 50,
        backgroundColor: COLOS.white,
        justifyContent: "center",
        borderWidth: 3,
        borderColor: COLOS.primary,
        flex: 0
    }
})
