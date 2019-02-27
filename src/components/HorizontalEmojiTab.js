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
  View,
  FlatList,
  TouchableHighlight,
  Dimensions
} from "react-native";

import HorizontalEmojiCell from "./HorizontalEmojiCell";

const MENU_HEIGHT = 44;

type Props = {};
export default class HorizontalEmojiTab extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { indexActive: 0 };
  }

  actionOnRow = (item, index) => {
    console.log(index);
    console.log(this.state.indexActive);
        
    if (index !== this.state.indexActive) {
        this.setState({ indexActive: index });
        console.log(index);
        console.log(this.state.indexActive);
        // this.props.onMenuClick(index);
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
        <FlatList
        style={styles.flatlist}
        keyboardShouldPersistTaps={'handled'}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.props.arrayData}
          renderItem={({ index, item }) => {
              var isLeft = false;
              var isRight = false;
              if(index == 0){
                  isLeft = true;
              }
              if(index == this.props.arrayData.length -1){
                isRight = true;
              }
              console.log("Re-render at"+index);
            let itemView = (
              <HorizontalEmojiCell 
                left={isLeft}
                right={isRight} 
                // indexItem = {index}
                title={item}
                isBorder={this.props.isBorder}
                isIcon={this.props.isIcon}
                isActive={index === this.state.indexActive ? true : false}
              />
            );
            return (
              <TouchableHighlight
               style={{
                height: MENU_HEIGHT-5
                }}
                underlayColor="rgba(0,0,0,0.2)"
                activeOpacity={0.2}
                onPress={() => this.actionOnRow(item, index)}
              >
                {itemView}
              </TouchableHighlight>
            );
          }}
          keyExtractor={(index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: MENU_HEIGHT,
    width: "100%"
  },
  flatlist: {
    marginLeft:2,
    marginRight:2,
    
  }
});
