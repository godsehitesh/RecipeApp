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
            showIngredients: false,
            price: this.props.wiPrice,
            added: false
        }
    }

    toggleSwitch(){
        this.setState({
            withIngredients: !this.state.withIngredients,
        });

        if(this.state.withIngredients){
            this.setState({
                price: this.props.wiPrice * this.state.noOfPeople/3
            });
        }
        else{
            this.setState({
                price: this.props.woiPrice* this.state.noOfPeople/3
            });
        }
    }

    showIngredientsToggle(){
        this.setState({
            showIngredients: !this.state.showIngredients
        }
        )

        console.log('showIngredients: '+ this.state.showIngredients);
    }

    addItem(){
        var jso = {'name': this.props.name, 'noOfPeople': this.state.noOfPeople, 'price': this.state.price, 'withIngredients': this.state.withIngredients};
        console.log('jso');
        console.log(jso);
        this.setState({
            added: true
        });
        this.props.addItem(jso);
    }

    removeItem(){
        this.setState({
            added: false
        });    

        this.props.removeItem(this.props.name);
    }

    render(){
        return (
            <View style ={styles.container} elevation={5}>
                <View style = {styles.upperContainer}>
                    <View style = {styles.liElements}>
                        <Text style = {{fontWeight: 'bold', fontSize: 16}}>{this.props.name}</Text>
                    
                        <Text style = {styles.liText}>Price: {this.state.price}</Text>
                            
                        <View style = {styles.nP}>
                            <Text  style = {styles.liText}>No. of People: </Text>
                            <Picker
                                    selectedValue={this.state.noOfPeople}
                                    style={{height: 20, width: deviceWidth*0.23}}
                                    onValueChange={(itemValue, itemIndex) =>{
                                        this.setState({
                                            noOfPeople: itemValue,
                                            });

                                        if(!this.state.withIngredients){
                                        
                                            this.setState({
                                                price: this.props.wiPrice*itemValue/3
                                            });
                                            
                                        }else{
                                            this.setState({
                                                price: this.props.woiPrice*itemValue/3
                                            });
                                        }
                                    }
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
                    {this.state.added ?
                    <TouchableOpacity style = {{    height: deviceHeight*0.045, backgroundColor: '#C60000',  width: '35%', alignItems: 'center', justifyContent: 'center', borderRadius: 10}} onPress = {() => this.removeItem()}>
                        <Text style = {{color: 'white', fontSize: 14}}>Remove</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity style = {{    height: deviceHeight*0.045, backgroundColor: '#C60000',   width: '35%', alignItems: 'center', justifyContent: 'center', borderRadius: 10}} onPress = {() => this.addItem()}>
                        <Text style = {{color: 'white', fontSize: 14}}>Add</Text>
                    </TouchableOpacity>
                    }
                
                </View>
                {this.state.showIngredients ?
                    <View style = {styles.ingredientsContainer}>
                        <View style = {{}}>
                            <Text style = {styles.liText}>Name</Text>
                            {this.props.ingredients.items.map((item)=>{
                                return (
                                    <Text style = {styles.liText}>{item.name}</Text>
                                    
                                );   
                                })
                            }
                        </View>
                        <View style = {{}}>
                            <Text style = {styles.liText}>Weight</Text>
                            {this.props.ingredients.items.map((item)=>{
                                return (
                                    <Text style = {styles.liText}>{item.weight}</Text>
                                    
                                );   
                                })
                            }
                        </View>
                        <View style = {{}}>
                            <Text style = {styles.liText}>Price</Text>
                            {this.props.ingredients.items.map((item)=>{
                                return (
                                    <Text style = {styles.liText}>{item.price}</Text>
                                    
                                );   
                                })
                            }
                        </View>                        
                    </View>:
                    null
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
        shadowColor: '#805A3B',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        padding: 10
    },
    liText:{
        fontSize: 14,
        color: '#805A3B'
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    showIngredients: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
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
    },
    ingredientsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
});

export default ListItem;