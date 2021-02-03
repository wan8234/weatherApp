import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

class Photo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../resource/Image.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 10,
        height: 10,
    },
    image: {
        width: 8,
        height: 8,
        resizeMode: 'contain',
        borderRadius: 20,
    },
});

export default Photo;
