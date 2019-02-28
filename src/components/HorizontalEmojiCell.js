/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
const MENU_HEIGHT = 44;

type Props = {};
export default class HorizontalEmojiCell extends Component<Props> {
  constructor(props) {
    super(props);
    console.log(this.props.title);
  }

  onPressItem = () => {
    return this.props.actionOnRow(this.props.index)
  }

  render() {
    var a = "ic_chatting_robot.png";
    return (
      <TouchableOpacity 
      underlayColor="rgba(0,0,0,0.2)"
      activeOpacity={0.2}
      onPress={this.onPressItem}
      style={[styles.container,{
        borderBottomLeftRadius:this.props.left == true && this.props.isBorder == true ? 14:0,
        borderTopLeftRadius:this.props.left == true && this.props.isBorder == true ? 14:0,
        borderBottomRightRadius:this.props.right == true && this.props.isBorder == true ? 14:0,
        borderTopRightRadius:this.props.right == true && this.props.isBorder == true ? 14:0,
        borderWidth:this.props.isBorder == true ? 0.5:0,
        borderRightWidth:this.props.right == true && this.props.isBorder == true ? 0.5:0,
        borderColor: '#000000',
        backgroundColor:this.props.isActive === true ? "rgba(0,0,0,0.2)":"white"       
        }]}>
            {this.props.isIcon == false ?
            <Text style={[styles.text,{
                color: this.props.isActive === true ? "white" : "black",
                fontWeight: this.props.isActive === true ? "bold" : "normal",
                }]
                } >
                {this.props.title}
            </Text>
            
            : <Image style={[styles.image,{width:40,height:40}]} source={this.props.icon} />}
                
        
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
  },
  text: {
      marginLeft:15,
      marginRight:15,
      marginTop:10,
      marginBottom:10,
      textAlign:"center",
      fontSize: 16,
  },
  image: {
    // marginLeft:15,
    // marginRight:15,
    // marginTop:10,
    // marginBottom:10,
    resizeMode: "center"
},

});