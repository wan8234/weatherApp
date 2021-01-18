import React from 'react';
import {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';

var HAMBURGER = 1;
var MUSIC = 2;
var SUNNY = 10;

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var imageComponent =
            this.props.btnType == HAMBURGER ? (
                <Image
                    style={this.props.style}
                    source={require('./resource/Hamburger.png')}
                />
            ) : (
                <Image
                    style={this.props.style}
                    source={require('./resource/MusicNotes.png')}
                />
            );
        return (
            <View>
                <TouchableOpacity>{imageComponent}</TouchableOpacity>
            </View>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var imageComponent =
            this.props.btnType == SUNNY ? (
                <Image
                    style={styles.weatherIcon}
                    source={require('./resource/Sun.png')}
                />
            ) : (
                <Image></Image>
            );
        return (
            <View style={this.props.style}>
                <View style={styles.weatherLeft}>{imageComponent}</View>
            </View>
        );
    }
}

// class WeatherIcon extends Component {
//   constructor(props) {
//     super(props);

//     if (this.props.temp > 15) {
//       this.state = {
//         imageComponent: <Image source={require('path/to/image1.png')} />,
//       };
//     } else if (this.props.temp > 5) {
//       this.state = {
//         imageComponent: <Image source={require('path/to/image2.png')} />,
//       };
//     } else {
//       this.state = {
//         imageComponent: <Image source={require('path/to/image3.png')} />,
//       };
//     }
//   }

//   render() {
//     return <View>{imageComponent}</View>;
//   }
// }

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    source={require('./resource/background.jpg')}
                    style={styles.backgroundJPG}></Image>
                <View style={styles.navbar}>
                    <ImageButton
                        style={{width: 25, height: 25, resizeMode: 'contain'}}
                        btnType={HAMBURGER}
                    />
                    <Text style={styles.navDate}>October 20th</Text>
                    <ImageButton
                        style={{width: 28, height: 28, resizeMode: 'contain'}}
                        btnType={MUSIC}
                    />
                </View>
                <Content style={styles.mainContent} btnType={SUNNY}></Content>
                <Content style={styles.blank}></Content>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        flex: 0.4,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: '#AF1423',
        flexDirection: 'row',
        paddingTop: 10,
    },
    navDate: {
        paddingRight: 50,
        paddingLeft: 50,
        fontSize: 20,
    },
    mainContent: {
        flex: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#BEEBE9',
        opacity: 0.5,
        borderRadius: 20,
    },
    blank: {
        flex: 5,
    },
    backgroundJPG: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
    },
    weatherLeft: {
        flex: 0.8,
    },
    weatherIcon: {
        flex: 1,
        width: 110,
        height: 110,
        resizeMode: 'contain',
        marginLeft: 20,
    },
});
