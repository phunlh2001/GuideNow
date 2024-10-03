import { View, Modal, Alert, Linking, Platform } from 'react-native';
import COLORS from '../constants/color';
import * as ImagePicker from 'expo-image-picker'
import Button from './Button';

export const uploadImage = async (mode, setOpenModal, imageResult) => {
    try {
        let result = {};
        const { status } =
            mode === 'gallery'
                ? await ImagePicker.requestMediaLibraryPermissionsAsync()
                : await ImagePicker.requestCameraPermissionsAsync();
        const permissionsGranted = status === 'granted';

        if (!permissionsGranted) {
            Alert.alert('Warning', 'Please allow access to images to perform this function.', [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'Go to settings', onPress: handleOpenSettings },
            ]);
        } else {
            result =
                mode === 'gallery'
                    ? await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 0.5,
                        base64: true,
                    })
                    : await ImagePicker.launchCameraAsync({
                        cameraType: ImagePicker.CameraType.back,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 0.5,
                        base64: true,
                    });
            if (!result.canceled) {
                await imageResult(result);
            }
        }
    } catch (error) {
        setOpenModal(false);
    }
};

const handleOpenSettings = () => {
    if (Platform.OS === 'ios') {
        Linking.openURL('app-settings:');
    } else {
        Linking.openSettings();
    }
}

export const renderModal = (openModal, setOpenModal, uploadImage, imageResult) => {
    return (
        <Modal
            visible={openModal}
            animationType="slide"
            transparent={true}
            statusBarTranslucent={true}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: COLORS.white,
                        justifyContent: 'flex-end',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                    }}>
                    <View
                        style={{
                            paddingHorizontal: 30,
                            marginBottom: 30,
                            paddingTop: 30,
                        }}>
                        <View>
                            <Button
                                title="Library"
                                colorFrom={COLORS.emeraldGreen}
                                colorTo={COLORS.deepGreen}
                                textColor={COLORS.white}
                                onPress={() => uploadImage('gallery', setOpenModal, imageResult)}
                            />
                            <Button
                                title="Camera"
                                colorFrom={COLORS.emeraldGreen}
                                colorTo={COLORS.deepGreen}
                                textColor={COLORS.white}
                                onPress={() => uploadImage(undefined, setOpenModal, imageResult)}
                            />
                        </View>
                        <Button
                            title="Cancel"
                            colorFrom={COLORS.gray}
                            colorTo={COLORS.light}
                            textColor={COLORS.black}
                            onPress={() => setOpenModal(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
