import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native-paper';

let customFonts = {'BubblegumSans' : require('../assets/BubblegumSans-Regular.ttf')}

export default class CreatePost extends React.Component {
  constructor(){
    super();
    this.state={
      fontsLoaded : false,
      previewImage : '../assets/image_1.jpg',
      dropDownHieght : 40,
    }
  }

  async loadFonts(){
    await Font.loadAsync(customFonts);
    this.setState({
      fontsLoaded : true,
    });
  }

  componentDidMount(){
    this.loadFonts();
  }

  render(){
    if(this.state.fontsLoaded === false){
      <AppLoading/>
    }else{
      var previewImg = {
        image1 : require('../assets/image_1'),
        image2 : require('../assets/image_2'),
        image3 : require('../assets/image_3'),
        image4 : require('../assets/image_4'),
        image5 : require('../assets/image_5'),
      }
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safe}/>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}/>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitle}>New Post</Text>
            </View>
          </View>
          <View style={styles.fieldContainer}>
           <ScrollView>
            <Image
            source={previewImg[this.state.previewImage]}
            style={styles.previewImage}/>  
            <View style={{height : RFValue(this.state.dropDownHieght)}}>
              
              <DropDownPicker
              items={[
                {label : "Image 1", value : 'image1'},
                {label : "Image 2", value : 'image2'},
                {label : "Image 3", value : 'image3'},
                {label : "Image 4", value : 'image4'},
                {label : "Image 5", value : 'image5'}]}
                
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height : 40,
                  borderRadius : 20,
                  marginBottom : 10,
                }}
                
                onOpen={()=>{
                  this.setState({dropDownHieght : 170})
                }}
                onClose={()=>{
                  this.setState({dropDownHieght : 40})
                }}
                
                style={{backgroundColor : "transparent"}}
                itemStyle={{justifyContent : 'flex-start'}}
                dropDownStyle={{backgroundColor : '#2a2a2a'}}
                labelStyle={{color : "white"}}
                arrowStyle={{color : "white"}}
                
                onChangeItem={item=>{
                  this.setState({
                    previewImg : item.value,
                  })
                }}
                />
            </View>

            <TextInput
            style={styles.inputFont}
            onChangeText={caption=>{
              this.setState({caption})
            }}
            placeHolder={"Caption"}
            placeholderTextColor={"white"}/>
           </ScrollView> 
          </View>
          <View style={{flex : 0.08}}/>
        </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  safe: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  fieldContainer: { flex: 0.85 },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  storyContainer: {
    flex: 1,
  },
  storyCardLight: {
    margin: RFValue(20),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  storyCardDark: {
    margin: RFValue(20),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: 'contain',
  },
  dataContainer: {
    flexDirection: 'row',
    padding: RFValue(20),
  },
  titleTextContainer: {
    flex: 0.8,
  },
  storyTitleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    color: 'white',
  },
  storyAuthorTextLight: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(18),
    color: 'white',
  },
  storyAuthorTextDark: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(18),
    color: 'black',
  },
  iconContainer: {
    flex: 0.2,
  },
  storyTextContainer: {
    padding: RFValue(20),
  },
  storyText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(15),
    color: 'white',
  },
  moralText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(20),
    color: 'white',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
});
