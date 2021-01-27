import React from 'react';
import {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

var HAMBURGER = 1;
var MUSIC = 2;
var SUNNY = 10;

// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View
//                 style={{
//                     flex: 1,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                 }}>
//                 <Text>HomeScreen</Text>
//             </View>
//         );
//     }
// }

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var imageComponent =
            this.props.btnType == HAMBURGER ? (
                <Image
                    style={this.props.style}
                    source={require('../resource/Hamburger.png')}
                />
            ) : (
                <Image
                    style={this.props.style}
                    source={require('../resource/MusicNotes.png')}
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
                    source={require('../resource/Sun.png')}
                />
            ) : (
                <Image></Image>
            );
        var temperature = 13;
        return (
            <View style={this.props.style}>
                <View style={styles.weatherLeft}>
                    {imageComponent}
                    <Text style={styles.temper}>{temperature} ℃</Text>
                </View>
                <View style={styles.weatherRight}>
                    <Image
                        style={styles.mapIcon}
                        source={require('../resource/MapPin.png')}
                    />
                    <View style={{flex: 1}}>
                        <Text style={styles.normalText}>Mykonos, Greece</Text>
                        <Text style={styles.normalText}>Sunny</Text>
                        <Text style={styles.normalText}>15 ℃ / 10 ℃</Text>
                        <Text style={styles.normalText}>
                            Good day for jogging
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
//Text에 View감싸주고 flex:1 추가해

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

export default class AppStack extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    source={require('../resource/background.jpg')}
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
                <View style={styles.blank}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        flex: 0.4,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        // backgroundColor: '#AF1423',
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
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#BEEBE9',
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
        top: 20,
        left: 25,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    temper: {
        fontSize: 35,
        top: 20,
        left: 35,
    },
    weatherRight: {
        flex: 1,
        marginRight: 12,
    },
    mapIcon: {
        top: 30,
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 7,
    },
    normalText: {
        flex: 0.22,
        fontSize: 18,
        textAlign: 'right',
        marginRight: 10,
    },
});
