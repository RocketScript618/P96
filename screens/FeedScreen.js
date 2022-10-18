import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar,Image} from 'react-native';

import PostCard from "./PostCard"
import {FlatList} from "react-native-gesture-handler";

let posts = require("../temp_posts.json");

export default class FeedScreen extends Component{

  renderItem = ({item:post}) => {
    return <PostCard post={post}/>;
  };

  keyExtractor = (item,index) => index.toString();

  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTile}>
          <Text style={styles.appTileText}>Spectagram</Text>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "darkblue"
  },
  droidSafeArea:{
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 35
  },
  appTile:{
    flex:0.07,
    padding:5,
    flexDirection: "row",
    justifyContent: "center"
  },
  appTileText:{
    color:"white",
    fontSize: 28
  },
  cardContainer:{
    flex:0.93
  }
})