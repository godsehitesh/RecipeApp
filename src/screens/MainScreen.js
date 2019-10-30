import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Picker,
  Dimensions
} from 'react-native';


import Option from '../components/Option';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';

deviceHeight = Dimensions.get('window').height;
deviceWidth = Dimensions.get('window').width;

data = {
  "recipes": {
    "starter": {
      "Vegeterain": [
        {
          "name": "GobiManuchuria",
          "withIngrediantPrice": "70",
          "withOutIngrediantsPrice": "20",
          "code": "GOBI_MANCHURIA",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Gobi",
                "weight": "0.5",
                "price": 10
              },
              {
                "name": "FreedomOil",
                "weight": "0.250",
                "price": 50
              },
              {
                "name": "Sauce",
                "weight": "0.5",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "BabyCornManchuria",
          "withIngrediantPrice": "80",
          "withOutIngrediantsPrice": "20",
          "code": "BABYCORN_MANCHURIA",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "BabyCorn",
                "weight": "0.5",
                "price": 20
              },
              {
                "name": "FreedomOil",
                "weight": "0.250",
                "price": 50
              },
              {
                "name": "Sause",
                "weight": "0.5",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "ChilliCheeseGarlicBread",
          "withIngrediantPrice": "40",
          "withOutIngrediantsPrice": "10",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "CHILLI_CHEESE_GARLIC_BREAD",
          "ingrediants": {
            "items": [
              {
                "name": "BrownBead",
                "weight": "0.5",
                "price": 20
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Butter",
                "weight": "0.200",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
      ],
      "Nonvegeterain": [
        {
          "name": "Sesame Chicken Bites",
          "withIngrediantPrice": "160",
          "withOutIngrediantsPrice": "40",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "SESAME_CHICKEN_BITES",
          "ingrediants": {
            "items": [
              {
                "name": "Chicken",
                "weight": "0.5",
                "price": 100
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Butter",
                "weight": "0.200",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Andhra Chilli Chicken",
          "withIngrediantPrice": "230",
          "withOutIngrediantsPrice": "50",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "ANDRA_CHILLI_CHICKEN",
          "ingrediants": {
            "items": [
              {
                "name": "Chicken",
                "weight": "0.5",
                "price": 100
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Butter",
                "weight": "0.200",
                "price": 10
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Tandoori Chicken",
          "withIngrediantPrice": "280",
          "withOutIngrediantsPrice": "40",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "TANDOORI_CHICKEN",
          "ingrediants": {
            "items": [
              {
                "name": "Chicken",
                "weight": "0.750",
                "price": 150
              },
              {
                "name": "FreedomOil",
                "weight": "0.200",
                "price": 20
              },
              {
                "name": "Butter",
                "weight": "0.200",
                "price": 20
              },
              {
                "name": "Misc",
                "weight": "0.200",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Chicken Lollipop",
          "withIngrediantPrice": "190",
          "withOutIngrediantsPrice": "40",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "SESAME_CHICKEN_BITES",
          "ingrediants": {
            "items": [
              {
                "name": "Chicken",
                "weight": "0.5",
                "price": 100
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 40
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
      ]
    },
    "MainCourse": {
      "VegCurries": [
        {
          "name": "Kadai Paneer",
          "withIngrediantPrice": "250",
          "withOutIngrediantsPrice": "100",
          "code": "KADAI_PANNER",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Panner",
                "weight": "0.5",
                "price": 10
              },
              {
                "name": "FreedomOil",
                "weight": "0.250",
                "price": 50
              },
              {
                "name": "vegetables",
                "weight": "0.5",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Mushroom Masala",
          "withIngrediantPrice": "250",
          "withOutIngrediantsPrice": "110",
          "code": "MASHROOM_MASALA",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Mashroom",
                "weight": "0.5",
                "price": 50
              },
              {
                "name": "FreedomOil",
                "weight": "0.250",
                "price": 50
              },
              {
                "name": "vegetables",
                "weight": "0.5",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Tomato Cashew Curry",
          "withIngrediantPrice": "250",
          "withOutIngrediantsPrice": "160",
          "code": "TOMATO_CASHEW_CURRY",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Tomato",
                "weight": "0.5",
                "price": 10
              },
              {
                "name": "Cashew",
                "weight": "0.250",
                "price": 100
              },
              {
                "name": "Freedom Oil",
                "weight": "0.5",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
      ],
      "NonvegCurries": [
        {
          "name": "Dum Methi Murgh",
          "withIngrediantPrice": "280",
          "withOutIngrediantsPrice": "190",
          "code": "DUM_METHI_MURGH",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Chichen",
                "weight": "0.5",
                "price": 100
              },
              {
                "name": "Masala",
                "weight": "0.250",
                "price": 40
              },
              {
                "name": "Freedom Oil",
                "weight": "0.5",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Chicken Butter Masala",
          "withIngrediantPrice": "280",
          "withOutIngrediantsPrice": "190",
          "code": "CHICKEN_BUTTER_MASALA",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Chichen",
                "weight": "0.5",
                "price": 100
              },
              {
                "name": "Masala",
                "weight": "0.250",
                "price": 40
              },
              {
                "name": "Freedom Oil",
                "weight": "0.5",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Andhra Special Chicken Curry",
          "withIngrediantPrice": "280",
          "withOutIngrediantsPrice": "240",
          "code": "ANDHRA_SPECIAL_CHICKEN_CURRY",
          "people": 3,
          "withOutIngrediants": "true",
          "ingrediants": {
            "items": [
              {
                "name": "Chichen",
                "weight": "0.5",
                "price": 100
              },
              {
                "name": "Masala",
                "weight": "0.250",
                "price": 40
              },
              {
                "name": "Freedom Oil",
                "weight": "0.5",
                "price": 50
              },
              {
                "name": "Vegetables",
                "weight": "0.5",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
      ],
      "RiceBiryani": [
        {
          "name": "Vegetable Fried Rice",
          "withIngrediantPrice": "190",
          "withOutIngrediantsPrice": "60",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "VEGETABLE_FRIED_RICE",
          "ingrediants": {
            "items": [
              {
                "name": "vegetables",
                "weight": "0.250",
                "price": 50
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Rice",
                "weight": "0.500",
                "price": 40
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 30
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Jeera rice",
          "withIngrediantPrice": "130",
          "withOutIngrediantsPrice": "30",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "JEERA_RICE",
          "ingrediants": {
            "items": [
              {
                "name": "Rice",
                "weight": "0.500",
                "price": 40
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 50
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Hyderabad Chicken Biryani",
          "withIngrediantPrice": "320",
          "withOutIngrediantsPrice": "70",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "HYDERABAD_CHICKEN_BIRYANI",
          "ingrediants": {
            "items": [
              {
                "name": "Chicken",
                "weight": "0.740",
                "price": 150
              },
              {
                "name": "FreedomOil",
                "weight": "0.150",
                "price": 20
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 80
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
        {
          "name": "Nellore Mutton Biryani ",
          "withIngrediantPrice": "400",
          "withOutIngrediantsPrice": "70",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "NELLORE_MUTTON_BIRYANI",
          "ingrediants": {
            "items": [
              {
                "name": "Mutton",
                "weight": "0.750",
                "price": 250
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 70
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
      ],
      "Rotis":
	  [
		{
          "name": "Rumali Roti",
          "withIngrediantPrice": "150",
          "withOutIngrediantsPrice": "30",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "VEGETABLE_FRIED_RICE",
          "ingrediants": {
            "items": [
              {
                "name": "Mida",
                "weight": "0.350",
                "price": 50
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 30
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
		   {
          "name": "Butter Kulcha",
          "withIngrediantPrice": "125",
          "withOutIngrediantsPrice": "30",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "BUTTER_KULCHA",
          "ingrediants": {
            "items": [
              {
                "name": "Mida",
                "weight": "0.500",
                "price": 40
              },
              {
                "name": "Butter",
                "weight": "0.100",
                "price": 25
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 30
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
		{
          "name": "Garlic Naan",
          "withIngrediantPrice": "110",
          "withOutIngrediantsPrice": "30",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "GARLIC_NAAN",
          "ingrediants": {
            "items": [
              {
                "name": "Maida",
                "weight": "0.500",
                "price": 40
              },
              {
                "name": "FreedomOil",
                "weight": "0.150",
                "price": 20
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 20
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
		{
          "name": "Paratha",
          "withIngrediantPrice": "80",
          "withOutIngrediantsPrice": "20",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "PARATHA",
          "ingrediants": {
            "items": [
              {
                "name": "Mida",
                "weight": "0.500",
                "price": 40
              },
              {
                "name": "FreedomOil",
                "weight": "0.100",
                "price": 10
              },
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 10
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
	  ]
    },
    "soups":[
      {
          "name": "Tomato Soup",
          "withIngrediantPrice": "90",
          "withOutIngrediantsPrice": "40",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "TOMATO_SOUP",
          "ingrediants": {
            "items": [
              {
                "name": "Tomota",
                "weight": "0.5",
                "price": 10
              },
             
              {
                "name": "Mesc",
                "weight": "0.200",
                "price": 40
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
         {
          "name": "Sweet corn Vegetable Soup",
          "withIngrediantPrice": "90",
          "withOutIngrediantsPrice": "40",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "SWEET_CORN_VEG_SOUP",
          "ingrediants": {
            "items": [
              {
                "name": "Corn",
                "weight": "0.5",
                "price": 10
              },
             
              {
                "name": "Vegetables",
                "weight": "0.200",
                "price": 40
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        },
         {
          "name": "Sweet corn Chicken Soup",
          "withIngrediantPrice": "90",
          "withOutIngrediantsPrice": "40",
          "people": 3,
          "withOutIngrediants": "true",
          "code": "CONR_CHICKEN_SOUP",
          "ingrediants": {
            "items": [
              {
                "name": "Chicken",
                "weight": "0.5",
                "price": 10
              },
             
              {
                "name": "Corn",
                "weight": "0.200",
                "price": 40
              }
            ]
          },
          "imageURL":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/18/0/mealmakeover_hashbrowns.jpg.rend.hgtvcom.966.725.suffix/1398823838067.jpeg"
        }
    ]
      
    
  }
};



class MainScreen extends React.Component {

    constructor(props){
      super(props);
  
      this.state= {
        selectedOption : '',
        searchTerm: '',
        category: '',
        subCategory: '',
        vegNonveg: 'Veg',
        itemsAdded: []
      }
    }
  
    setSearchTerm(term){
  
      this.setState({
        searchTerm: term
      });
    }
  
    addItem(itemDetails){
      var tempCart = this.state.itemsAdded;
      tempCart.push(itemDetails);
  
      this.setState({
        itemsAdded: tempCart  
      });

      console.log('itemsAdded:');
      console.log(this.state.itemsAdded);
    }

    removeItem(itemName){
      var tempCart = this.state.itemsAdded;
      tempCart = tempCart.filter(item => item.name!=itemName);
  
      this.setState({
        itemsAdded: tempCart  
      });

      console.log('itemsAdded:');
      console.log(this.state.itemsAdded);
      
    }
  
    renderOption(){
        
      switch(this.state.selectedOption){
        case 'Starters':
          if(this.state.vegNonveg=='Nonveg'){
            return(
              <FlatList
                data={data.recipes.starter.Nonvegeterain}
                extraData={this.state}
                renderItem={({ item }) =>{ 
                                      if(item.name.includes(this.state.searchTerm)) { 
                                          return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants} addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                        }else{
                                          return null;
                                        } }}
                keyExtractor={item => item.name}
              />   
          );
          }else{
            return(
                <FlatList
                  data={data.recipes.starter.Vegeterain}
                  extraData={this.state}
                  renderItem={({ item }) =>{ 
                                        if(item.name.includes(this.state.searchTerm)) { 
                                            return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants}  addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                          }else{
                                            return null;
                                          } }}
                  keyExtractor={item => item.name}
                />   
            );
          }
  
        case 'Mains':
          switch(this.state.subCategory){
            case 'VegCurries':
                return(
                  <FlatList
                    data={data.recipes.MainCourse.VegCurries}
                    extraData={this.state}
                    renderItem={({ item }) => { 
                                          if(item.name.includes(this.state.searchTerm)) { 
                                              return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants}  addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                            }else{
                                              return null;
                                            } }}
                    keyExtractor={item => item.name}
                  /> );
  
            case 'NonvegCurries':
                return(
                  <FlatList
                    data={data.recipes.MainCourse.NonvegCurries}
                    extraData={this.state}
                    renderItem={({ item }) => { 
                                          if(item.name.includes(this.state.searchTerm)) { 
                                              return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants}  addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                            }else{
                                              return null;
                                            } }}
                    keyExtractor={item => item.name}
                  /> );
  
  
            case 'RiceBiryani':
                return(
                  <FlatList
                    data={data.recipes.MainCourse.RiceBiryani}
                    extraData={this.state}
                    renderItem={({ item }) => { 
                                          if(item.name.includes(this.state.searchTerm)) { 
                                              return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants}  addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                            }else{
                                              return null;
                                            } }}
                    keyExtractor={item => item.name}
                  /> );
  
            case 'Rotis':
                return(
                  <FlatList
                    data={data.recipes.MainCourse.Rotis}
                    extraData={this.state}
                    renderItem={({ item }) => { 
                                          if(item.name.includes(this.state.searchTerm)) { 
                                              return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants}  addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                            }else{
                                              return null;
                                            } }}
                    keyExtractor={item => item.name}
                  /> );
          }
          
        case 'Soups':
          return (
            <ScrollView>
              <FlatList
                data={data.recipes.soups}
                extraData={this.state}
                renderItem={({ item }) => { 
                                      if(item.name.includes(this.state.searchTerm)) { 
                                          return (<View style = {styles.listItemContainer}><ListItem name = {item.name} wiPrice = {item.withIngrediantPrice} woiPrice = {item.withOutIngrediantsPrice} ingredients = {item.ingrediants}  addItem = {(item) => this.addItem(item)} removeItem = {(itemName)=> this.removeItem(itemName)} imgsrc = {{uri: item.imageURL}}/></View>);
                                        }else{
                                          return null;
                                        } }}
                keyExtractor={item => item.name}
              />
            </ScrollView>
           );
      }
    }
  
    setOption(option, subOption){
      if(option == 'Mains'){
        this.setState({
          selectedOption: option,
          category: option,
          subCategory: subOption
        })
      }else{
        this.setState({
          selectedOption: option,
          category: option,
          subCategory: '',
          vegNonveg: subOption
        });
      }
    }

    getCartTotal(){
      var total = 0;

      if(this.state.itemsAdded.length>0){  
        this.state.itemsAdded.forEach((item)=>{

            total = total + parseInt(item.price); 

        });
      }

      return(
        <Text style = {{fontWeight: 'bold'}}>Total: Rs.{total}</Text>
      );
    }

    renderSubcategory(){
      switch(this.state.selectedOption){
        case 'Starters':
          return (
            <View style = {styles.rowOne}>
              {this.state.selectedOption == 'Starters'&&this.state.vegNonveg =='Veg'?
                <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Starters', 'Veg')}>
                  <Text style = {{color: 'white'}}>Veg</Text>
                </TouchableOpacity>:
                <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Starters', 'Veg')}>
                  <Text style = {{color: '#F45817'}}>Veg</Text>
                </TouchableOpacity>
              }
              {this.state.selectedOption == 'Starters'&&this.state.vegNonveg =='Nonveg'?
               <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Starters', 'Nonveg')}>
                 <Text style = {{color: 'white'}}>Nonveg</Text>
              </TouchableOpacity>:
              <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Starters', 'Nonveg')}>
                <Text style = {{color: '#F45817'}}>Nonveg</Text>
              </TouchableOpacity>
              }
            </View>
          );

        case 'Mains':
          return(
            <View style = {styles.rowOne}>
              {this.state.selectedOption == 'Mains'&&this.state.subCategory =='VegCurries'?
              <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Mains', 'VegCurries')}>
              <Text style = {{color: 'white'}}>VegCurries</Text>
              </TouchableOpacity>:
              <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Mains', 'VegCurries')}>
                <Text style = {{color: '#F45817'}}>VegCurries</Text>
              </TouchableOpacity>
              }
              {this.state.selectedOption == 'Mains'&&this.state.subCategory =='NonvegCurries'?
                <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Mains', 'NonvegCurries')}>
                  <Text style = {{color: 'white'}}>NonvegCurries</Text>
                </TouchableOpacity>:
              <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Mains', 'NonvegCurries')}>
                <Text style = {{color: '#F45817'}}>NonvegCurries</Text>
              </TouchableOpacity>
              }
              {this.state.selectedOption == 'Mains'&&this.state.subCategory =='RiceBiryani'?
                <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Mains', 'RiceBiryani')}>
                  <Text style = {{color: 'white'}}>RiceBiryani</Text>
                </TouchableOpacity>:
              <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Mains', 'RiceBiryani')}>
                <Text style = {{color: '#F45817'}}>RiceBiryani</Text>
              </TouchableOpacity>
              }
              {this.state.selectedOption == 'Mains'&&this.state.subCategory =='Rotis'?
              <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Mains', 'Rotis')}>
              <Text style = {{color: 'white'}}>Rotis</Text>
            </TouchableOpacity>:
              <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Mains', 'Rotis')}>
                <Text style = {{color: '#F45817'}}>Rotis</Text>
              </TouchableOpacity>
              }
            </View>
          );
          
        default:
          return null;
      }
    }

    renderList(){
      
      switch(this.state.selectedOption){

        case 'Starters':
            return(<View style = {{height: '61%'}}>
              {this.renderOption()}
            </View>);

        case 'Mains':
          return(<View style = {{height: '58.4%'}}>
                  {this.renderOption()}
                </View>);

        default:
            return(<View style = {{height: '68%'}}>
              {this.renderOption()}
            </View>);
      }
    }
  
    render(){
      console.log('searchTerm: '+this.state.searchTerm);
      return (
        <View style = {styles.container}>
  
            {this.state.selectedOption == '' ?
            <View>
              <View style = {styles.header} />
              <View style = {styles.optionsContainer}>
                  <TouchableOpacity style = {styles.touchableOpac} onPress = {() => this.setOption('Starters', 'Veg')}>
                    <Option option = 'Starters' imgsrc = {require('../assets/starters.jpg')} />
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.touchableOpac} onPress = {() => this.setOption('Mains', 'VegCurries')}>
                    <Option option = 'Mains' imgsrc = {require('../assets/mains.jpg')}/>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.touchableOpac} onPress = {() => this.setOption('Soups', '')}>
                    <Option option = 'Soups' imgsrc = {require('../assets/soups.jpeg')}/>  
                  </TouchableOpacity>
              </View>
              <View style = {styles.footer} />
            </View>
            :
            <View>
              <View style={styles.searchBarContainer}>
                <SearchBar setSearchTerm = {(term) => this.setSearchTerm(term)}/>
              </View>
              <View style={styles.labelsContainer}>
                  <View style = {styles.rowOne}>
                      {this.state.selectedOption == 'Starters' ?
                        <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Starters', 'Veg')}>
                          <Text style = {{color: 'white'}}>Starters</Text>
                        </TouchableOpacity>:
                        <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Starters', 'Veg')}>
                          <Text style = {{color: '#F45817'}}>Starters</Text>
                        </TouchableOpacity>
                      }
                      {this.state.selectedOption == 'Mains' ?
                        <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Mains', 'VegCurries')}>
                          <Text style = {{color: 'white'}}>Mains</Text>
                        </TouchableOpacity>:
                        <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Mains', 'VegCurries')}>
                          <Text style = {{color: '#F45817'}}>Mains</Text>
                        </TouchableOpacity>
                      }
                      {this.state.selectedOption == 'Soups' ?
                          <TouchableOpacity style = {styles.selectedOptionLabel} onPress = {()=>this.setOption('Soups', '')}>
                            <Text style = {{color: 'white'}}>Soups</Text>
                          </TouchableOpacity>:
                          <TouchableOpacity style = {styles.optionLabel} onPress = {()=>this.setOption('Soups', '')}>
                           <Text style = {{color: '#F45817'}}>Soups</Text>
                          </TouchableOpacity>
                      }
                  </View>
                  {this.renderSubcategory()}
              </View>
              {this.renderList()}
              <View style = {styles.cart} elevation = {3}>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style = {{fontWeight: 'bold'}}>Items Selected: {this.state.itemsAdded.length}</Text>
                  <Text style = {{fontWeight: 'bold', marginRight: 10}}>View Cart</Text>
                </View>
                
                {this.getCartTotal()}
              </View>
            </View>
            }  
        </View>
        );
    }
  };

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'column'
    },
    header:{
      backgroundColor: '#F45817',
      height: '9%',
      borderRadius: 5
    },
    searchBarContainer: {
      margin: 10
    },
    optionsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '82%'
    },
    rowOne:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 5
    },
    optionLabel: {
      width: '23%',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 5

    },
    selectedOptionLabel: {
      backgroundColor: '#F45817',
      width: '23%',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 5,  
    },
    listItemContainer:{
    },
    footer: {
      backgroundColor: '#F45817',
      height: '9%',
      borderRadius: 5
    },
    listContainer:{
      height: '59%'
    },
    latterContainer: {
      height:'91%'
    },
    touchableOpac: {
      height: '15%',
      width: '65%',
      margin: 10,
      backgroundColor: 'white'
    },
    labelsContainer: {
      width: '100%',
      justifyContent: 'center'
    },
    cart:{
      margin: 10,
      borderRadius: 10,
      padding: 10,
 
      shadowColor: '#805A3B',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      borderTopWidth: 1,
      borderColor: '#B6B6B6'
    }
  });
  
  export default MainScreen;
  