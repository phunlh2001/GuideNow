import React, { useState } from 'react'
import {
    Animated,
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Text,
    Dimensions,
    ScrollView,
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import COLORS from '../constants/color'
import SIZES from '../constants/fontsize'
import { globalData } from '../sampleData/data'
const width = Dimensions.get('screen').width / 2 - 30

const OwnTripTabView = ({ callBack }) => {
    const Card = ({ items }) => {
        return (
            <View style={styles.displayAttrac}>
                {items.map((item) => (
                    <TouchableOpacity onPress={callBack} key={item.idx}>
                        <View style={styles.card}>
                            <ImageBackground
                                source={{ uri: `${item.url}` }}
                                resizeMode="cover"
                                imageStyle={{ borderRadius: 20 }}
                                style={styles.image}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        padding: 15,
                                        backgroundColor: 'rgba(0,0,0, 0.3)',
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                    }}
                                >
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.des} numberOfLines={3}>
                                        {item.des}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    const NorthRoute = () => (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <Card items={globalData} />
        </ScrollView>
    )
    const CentralRoute = () => (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <Card items={globalData} />
        </ScrollView>
    )
    const SouthRoute = () => (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <Card items={globalData} />
        </ScrollView>
    )

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'north', title: 'North' },
        { key: 'central', title: 'Central' },
        { key: 'south', title: 'South' },
    ])

    const handleIndexChange = (i) => setIndex(i)

    const renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i)

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex) =>
                            inputIndex === i ? 1 : 0.5,
                        ),
                    })

                    const isActive = index === i
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={[
                                styles.tabItem,
                                isActive && styles.activeTabItem,
                            ]}
                            onPress={() => setIndex(i)}
                        >
                            <Animated.Text
                                style={{
                                    opacity,
                                    color: isActive
                                        ? COLORS.white
                                        : COLORS.primary,
                                }}
                            >
                                {route.title}
                            </Animated.Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    const renderScene = SceneMap({
        north: NorthRoute,
        central: CentralRoute,
        south: SouthRoute,
    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={handleIndexChange}
        />
    )
}

export default OwnTripTabView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 20,
    },
    tabItem: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
    },
    activeTabItem: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
    },
    card: {
        height: 250,
        width,
        marginTop: 10,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    displayAttrac: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: COLORS.white,
    },
    des: {
        fontSize: SIZES.caption,
        color: COLORS.white,
    },
})
