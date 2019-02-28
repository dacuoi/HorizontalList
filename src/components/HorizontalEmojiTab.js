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
  View,
  FlatList,
} from "react-native";

import HorizontalEmojiCell from "./HorizontalEmojiCell";

const MENU_HEIGHT = 44;

type Props = {};
export default class HorizontalEmojiTab extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { indexActive: 0 };
  }

  actionOnRow = (index) => {
    if (index !== this.state.indexActive) {
      this.setState({ indexActive: index });
      this.props.onMenuClick(index);
    }
  };

  renderItems = ({ item, index }) => {
    var isLeft = false;
    var isRight = false;
    if (index == 0) {
      isLeft = true;
    }
    if (index == this.props.arrayData.length - 1) {
      isRight = true;
    }
    console.log("render at: "+ index);
    return (
      <HorizontalEmojiCell
        left={isLeft}
        right={isRight}
        title={item.name}
        id={item.id}
        icon={item.icon}
        index={index}
        isBorder={this.props.isBorder}
        isIcon={this.props.isIcon}
        isActive={index === this.state.indexActive ? true : false}
        actionOnRow={this.actionOnRow}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          keyboardShouldPersistTaps={"handled"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.props.arrayData}
          renderItem={this.renderItems}
          actionOnRow={this.actionOnRow}
          keyExtractor={(item) => item.id}
          extraData={this.state}
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
    marginLeft: 5,
    marginRight: 5
  }
});
