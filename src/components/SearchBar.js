import React from 'react';
import {Text, View, StyleSheet, Image, TextInput, Dimensions} from 'react-native';

deviceHeight = Dimensions.get('window').height;
deviceWidth = Dimensions.get('window').width;

class SearchBar extends React.Component{

    render(){
        return (
            <View style = {styles.container}>
                <Image resizeMode ='contain' style = {styles.image} source = {require('../assets/search.png')}/>
                <TextInput placeholder = 'Search' onChangeText = {term => this.props.setSearchTerm(term)}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#B6B6B6'
    },
    image:{
        height: deviceHeight*0.045,
        width: '10%',
        margin: 5
    }
});

export default SearchBar;