/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HorizontalEmojiTab from "./src/components/HorizontalEmojiTab";

import icImage1 from "./res/ic_number_0.png";
import icImage2 from "./res/ic_number_1.png";
import icImage3 from "./res/ic_number_2.png";
import icImage4 from "./res/ic_number_3.png";

type Props = {};
export default class App extends Component<Props> {
  render() {
    var arrayData1 = [{
      "id": "1",
      "name": "ic_chatting_robot.png",
      "icon":icImage1,
      "status": true
    },
    {
      "id": "2",
      "name": "ic_chatting_robot.png",
      "icon":icImage2,
      "status": false
    },
    {
      "id": "3",
      "name": "ic_chatting_robot.png",
      "icon":icImage3,
      "status": false
    },
    {
      "id": "4",
      "name": "ic_chatting_robot.png",
      "icon":icImage4,
      "status": false
    }];
    var arrayData2 = [{
      "id": "1",
      "name": "ic_chatting_robot.png",
      "icon":icImage1,
      "status": true
    },
    {
      "id": "2",
      "name": "ic_chatting_robot.png",
      "icon":icImage2,
      "status": false
    },
    {
      "id": "3",
      "name": "ic_chatting_robot.png",
      "icon":icImage3,
      "status": false
    },
    {
      "id": "4",
      "name": "ic_chatting_robot.png",
      "icon":icImage4,
      "status": false
    }];

    return (
      <View style={styles.container}>
        <HorizontalEmojiTab
              arrayData = {arrayData1}
              isBorder={true}
              isIcon={true}
              onMenuClick={index => {
                
              }}
            />
            <HorizontalEmojiTab
              arrayData = {arrayData2}
              isBorder={true}
              isIcon={false}
              onMenuClick={index => {
                
              }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
