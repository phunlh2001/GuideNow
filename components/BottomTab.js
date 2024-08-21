import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useEffect, useState } from 'react'
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import COLOS from '../constants/colors'

const tabs = [
    {
        id: 1,
        name: 'Home',
        component: <>Page 1</>,
        label: 'Home',
        icon: 'home',
        inActiveIcon: 'home-outline',
    },
    {
        id: 2,
        name: 'Home2',
        component: <>Page 2</>,
        label: 'Home',
        icon: 'home',
        inActiveIcon: 'home-outline',
    },
    {
        id: 3,
        name: 'Home3',
        component: <>Page 3</>,
        label: 'Home',
        icon: 'home',
        inActiveIcon: 'home-outline',
    },
]

const Tab = createBottomTabNavigator()
const { width } = Dimensions.get('window')

const MARGIN = 12.5
const TAB_BAR_WIDTH = width - 2 * MARGIN
const TAB_WIDTH = TAB_BAR_WIDTH / tabs.length

const TabIcon = ({ isFocused, tabIcon, label, index }) => {
    const [translateY] = useState(new Animated.Value(0))
    const translateIcon = (value) => {
        Animated.spring(translateY, {
            toValue: value,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        if (isFocused) translateIcon(-14)
        else translateIcon(0)
    }, [index])

    return (
        <>
            <Animated.View style={{ transform: [{ translateY }] }}>
                <Icon
                    name={isFocused ? tabIcon.activeIcon : tabIcon.inActiveIcon}
                    size={28}
                    color={isFocused ? COLOS.white : COLOS.black}
                />
            </Animated.View>
            <Text
                style={{
                    color: isFocused ? COLOS.primary : COLOS.black,
                    fontWeight: 'bold',
                }}
            >
                {label}
            </Text>
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

    return (
        <View style={styles.tabBarContainer}>
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
                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused && { selected: true }}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <TabIcon
                            tabIcon={tabBarIcon}
                            isFocused={isFocused}
                            label={label}
                            index={state.index}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
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
        backgroundColor: COLOS.white,
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
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLOS.primary,
        bottom: 25,
        borderWidth: 4,
        borderColor: COLOS.white,
    },
})
