import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions, Picker, Switch, TouchableOpacity} from 'react-native';

deviceHeight = Dimensions.get('window').height;
deviceWidth = Dimensions.get('window').width;

class ListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            withIngredients: false,
            noOfPeople: 3,
            showIngredients: false
        }
    }

    toggleSwitch(){
        this.setState({
            withIngredients: !this.state.withIngredients
        });
    }

    showIngredientsToggle(){
        this.setState({
            showIngredients: !this.state.showIngredients
        }
        )
    }

    render(){
        return (
            <View style ={styles.container}>
                <View style = {styles.upperContainer}>
                    <View style = {styles.liElements}>
                        <Text style = {{fontWeight: 'bold', fontSize: 16}}>{this.props.name}</Text>
                    
                        <Text style = {styles.liText}>Price: {this.props.wiPrice}</Text>
                            
                        <View style = {styles.nP}>
                            <Text  style = {styles.liText}>No. of People: </Text>
                            <Picker
                                    selectedValue={this.state.noOfPeople}
                                    style={{height: 20, width: deviceWidth*0.23}}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({
                                            noOfPeople: itemValue
                                        })
                                    }>
                                    <Picker.Item label="3" value= {3} />
                                    <Picker.Item label="6" value={6} />
                                    <Picker.Item label="9" value={9} />
                            </Picker>
                        </View>

                        <View style = {styles.switchContainer}>
                            <Text style = {styles.liText}>{this.state.withIngredients? 'With Ingredients': 'Without Ingredients'}</Text>
                            <Switch
                                onValueChange = {() => this.toggleSwitch()}
                                value = {this.state.withIngredients}/>
                        </View>
                    </View>
                    <Image resizeMode = 'cover' source = {this.props.imgsrc} style = {styles.image}/>
                </View>
                <View style = {styles.lowerContainer}>
                    <TouchableOpacity onPress = {()=> this.showIngredientsToggle()}>
                        <View style = {styles.showIngredients}>
                            <Text  style = {styles.liText}>
                                Show Ingredients                
                            </Text>
                            <Image style = {{width: 20, height: 20}} source = {require('../assets/downArrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{    height: deviceHeight*0.045,   width: '35%', alignItems: 'center', justifyContent: 'center',  backgroundColor: 'red', borderRadius: 10}} onPress = {() => this.props.addItem({name: this.props.name})}>
                        <Text style = {{color: 'white', fontSize: 14}}>Add</Text>
                    </TouchableOpacity>
                
                </View>
                {this.state.showIngredients?
                    <View style = {styles.ingredientsContainer}>
                        {this.props.ingredients.items.map((item)=>{
                            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{item.name}</Text>
                                <Text>{item.weight}</Text>
                                <Text>{item.price}</Text>
                            </View>    
                            })
                        }
                        
                    </View>:
                    null
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        margin: 10
    },
    liText:{
        fontSize: 14
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    showIngredients: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lowerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        marginHorizontal: 2
    },
    nP: {
        flexDirection: 'row'
    },
    switchContainer: {
        flexDirection: 'row'
    },
    image: {
        height: deviceHeight*0.1,
        width: '35%',
        margin: 5,
        borderRadius: 10
    },
    liElements: {
        marginLeft: 10
    }
});

export default ListItem;