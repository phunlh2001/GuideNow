import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import COLORS from '../constants/color';
import SIZES from '../constants/fontsize';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = ({ data, sizeScreen, border = true, isShowText = true, callBack }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isReversing, setIsReversing] = useState(false); // Track direction
    const carouselRef = useRef(null);

    // Auto-scroll logic with reverse direction handling
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isReversing) {
                // Move forward
                if (activeSlide === data.length - 1) {
                    setIsReversing(true); // Start reversing when reaching the end
                } else {
                    carouselRef.current?.snapToItem(activeSlide + 1);
                }
            } else {
                // Move backward
                if (activeSlide === 0) {
                    setIsReversing(false); // Stop reversing when reaching the start
                } else {
                    carouselRef.current?.snapToItem(activeSlide - 1);
                }
            }
        }, 3000); // Auto-scroll every 3 seconds

        // Clear interval on unmount
        return () => {
            clearInterval(interval);
        };
    }, [activeSlide, isReversing]); // Dependency on activeSlide and isReversing

    const renderItem = ({ item }, parallaxProps) => (
        <TouchableOpacity activeOpacity={0.8} onPress={callBack}>
            <View style={[styles.item, { width: screenWidth - sizeScreen }]}>
                <ParallaxImage
                    source={{ uri: item.url }}
                    containerStyle={[styles.imageContainer, { borderRadius: border ? 70 : 0 }]}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {isShowText && (
                    <View style={{ position: 'absolute', top: "35%", left: 20, width: '70%' }}>
                        <Text style={styles.title} numberOfLines={2}>
                            {item.title}
                        </Text>
                        <Text style={{ color: COLORS.white }}>
                            {item.des}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - sizeScreen}
                layout={'tinder'}
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
                    marginHorizontal: -10,
                }}
                inactiveDotStyle={{
                    backgroundColor: COLORS.white,
                }}
                inactiveDotOpacity={0.8}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        height: 200,
        marginTop: 20,
    },
    title: {
        fontSize: SIZES.title,
        color: COLORS.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: 'white',
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',

    },
});
