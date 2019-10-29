import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Option extends React.Component{

    render(){
        return (
            <View elevation={3} style ={styles.container}>
                <Text style = {styles.text}>{this.props.option}</Text>
                <Image style = {styles.image} source = {this.props.imgsrc} resizeMode = 'cover'/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between',
        height: '100%',
        shadowColor: '#744f30',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    text:{
        fontSize: 20,
        marginLeft: 10,
        color: '#744f30'
    },
    image: {
        height: '100%',
        width: '50%',
        borderTopRightRadius:10,
        borderBottomRightRadius: 10
    }
});

export default Option;