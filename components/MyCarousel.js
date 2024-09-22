import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';
import TitleWithButton from './TitleWithButton';

const { width: screenWidth } = Dimensions.get('window');

const HotTrending = ({ data, sizeScreen }) => {

    const [activeSlide, setActiveSlide] = useState(0)

    const renderItem = ({ item }, parallaxProps) => (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.item, { width: screenWidth - sizeScreen }]}>
                <ParallaxImage
                    source={{ uri: item.url }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={{ position: 'absolute', top: "35%", left: 20, width: '70%' }}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.title}
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        {item.des}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <TitleWithButton title={"Hot Trending"} />
            </View>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - sizeScreen}
                layout={'stack'}
                layoutCardOffset={3}
                hasParallaxImages={true}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={{ position: 'absolute', alignSelf: 'center', bottom: -10, height: 70 }}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: COLORS.black,
                    marginHorizontal: -10
                }}
                inactiveDotStyle={{
                    backgroundColor: COLORS.white
                }}
                inactiveDotOpacity={0.8}
                inactiveDotScale={0.6}
            />

        </View>
    );
}

export default HotTrending

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 20,
        position: 'relative'
    },
    item: {
        height: 200,
        marginTop: 20
    },
    title: {
        fontSize: SIZES.title,
        color: COLORS.white,
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: 'white',
        borderRadius: 70,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});

