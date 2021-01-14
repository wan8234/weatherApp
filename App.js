import React from 'react';
import {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

var HAMBURGER = 1;
var MUSIC = 2;

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
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: '#AF1423',
                }}>
                <ImageButton
                    style={{width: 100, height: 100, resizeMode: 'contain'}}
                    btnType={HAMBURGER}
                />
                <ImageButton
                    style={{width: 100, height: 100, resizeMode: 'contain'}}
                    btnType={MUSIC}
                />
            </View>
        );
    }
}
