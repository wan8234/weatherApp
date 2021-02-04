import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
// import Photo from './Photo';

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var imageComponent = (
            <Image
                style={this.props.style}
                source={require('../../resource/Hamburger.png')}
            />
        );
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                {imageComponent}
            </TouchableOpacity>
        );
    }
}

class DrawerScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.config}>
                    <ImageButton style={styles.configHamburger} />
                    <Text style={styles.configText}>Configuration</Text>
                </View>
                <View style={styles.location}>
                    <Image
                        style={styles.locationMap}
                        source={require('../../resource/MapTrifold.png')}
                    />
                    <View style={styles.locationContent}>
                        <Text style={styles.locationText}>Location</Text>
                        <View style={styles.locationList}>
                            <View style={styles.locationCity}>
                                <Image
                                    style={styles.locationCityCircle}
                                    source={require('../../resource/Ellipse.png')}
                                />
                                <Text style={styles.locationCityText}>
                                    Mykonos, Greece
                                </Text>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.locationCityCross}
                                        source={require('../../resource/X.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.locationSearch}>
                                    <Image
                                        style={styles.locationSearchPlus}
                                        source={require('../../resource/Plus.png')}
                                    />
                                    <Text style={styles.locationSearchText}>
                                        Search...
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.Gallery}>
                    <Image
                        style={styles.GalleryLogo}
                        source={require('../../resource/Image.png')}
                    />
                    <Text style={styles.GalleryText}>Gallery</Text>
                </View>
                <View style={styles.Music}>
                    <Image
                        style={styles.MusicLogo}
                        source={require('../../resource/MusicNotes.png')}
                    />
                    <View style={styles.MusicContent}>
                        <Text style={styles.MusicText}>Music</Text>
                        <ScrollView>
                            <View>
                                <Text style={styles.MusicWeatherText}>
                                    Sunny
                                </Text>
                            </View>
                            <View style={styles.MusicList}>
                                <Image
                                    style={styles.MusicListCircle}
                                    source={require('../../resource/Ellipse.png')}
                                />
                                <Text style={styles.MusicListText}>
                                    Seorak - Thanos
                                </Text>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.MusicListCross}
                                        source={require('../../resource/X.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.MusicList}>
                                    <Image
                                        style={styles.MusicListPlus}
                                        source={require('../../resource/Plus.png')}
                                    />
                                    <Text
                                        style={
                                            (styles.MusicListText,
                                            {color: '#A0A0A0'})
                                        }>
                                        Add...
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.Maker}>
                    <Text style={styles.Maker}>ⓒ Kkook Coporation</Text>
                </View>
            </View>
        );
    }
}

export default DrawerScreen;

const styles = StyleSheet.create({
    config: {
        flex: 0.9,
        flexDirection: 'row',
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 1.5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    configHamburger: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    configText: {
        fontSize: 18,
        marginLeft: 18,
    },
    location: {
        flex: 4,
        flexDirection: 'row',
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 1.5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    locationMap: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    locationContent: {
        marginLeft: 14,
    },
    locationText: {
        fontSize: 18,
        paddingTop: 3,
    },
    locationList: {
        flex: 15,
        fontSize: 18,
    },
    locationCity: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationCityCircle: {
        height: 5,
        width: 5,
        resizeMode: 'contain',
        marginRight: 5,
        marginLeft: 3,
    },
    locationCityCross: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
    },
    locationCityText: {
        fontSize: 18,
        marginRight: 5,
        paddingBottom: 3,
    },
    locationSearch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationSearchPlus: {
        height: 12,
        width: 12,
        resizeMode: 'contain',
        marginRight: 2,
    },
    locationSearchText: {
        fontSize: 18,
        paddingBottom: 3,
        color: '#A0A0A0',
    },
    Gallery: {
        flex: 4,
        flexDirection: 'row',
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 1.5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    GalleryLogo: {
        height: 33,
        width: 33,
        resizeMode: 'contain',
    },
    GalleryText: {
        fontSize: 18,
        marginLeft: 9,
    },
    Music: {
        flex: 5,
        flexDirection: 'row',
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 1.5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    MusicLogo: {
        height: 29,
        width: 29,
        resizeMode: 'contain',
    },
    MusicText: {
        fontSize: 18,
    },
    MusicContent: {
        marginLeft: 14,
    },
    MusicWeatherText: {
        marginTop: 7,
        fontSize: 18,
    },
    MusicList: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    MusicListCircle: {
        height: 4,
        width: 4,
        resizeMode: 'contain',
        marginRight: 5,
        marginLeft: 3,
    },
    MusicListText: {
        fontSize: 15,
        paddingBottom: 3,
        marginRight: 3,
    },
    MusicListCross: {
        height: 9,
        width: 9,
        resizeMode: 'contain',
    },
    MusicListPlus: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        marginRight: 2,
    },
    Maker: {
        flex: 1,
        fontSize: 18,
        marginTop: 5,
        marginLeft: 10,
    },
});
