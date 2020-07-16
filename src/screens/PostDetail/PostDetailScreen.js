import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import Image from "react-native-scalable-image";
import PlaceholderImg from "../../../assets/images/login_bg.png";
import Axios from "axios";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
  const { postDetailData } = props.route.params;
  console.log("POST DETAIL: ", postDetailData);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <Header  {...props} title={postDetailData.restaurantName} /> 
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={{ uri: postDetailData.image }}
        />
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null }}>
            Rating : {postDetailData.rating}
          </TextUI>
          <TextUI size="sm" style={{ height: null }}>
            Address : {postDetailData.address}
          </TextUI>
          <TextUI size="sm" style={{ height: null }}>
            Cuisines : {postDetailData.cuisine}
          </TextUI>
          <TextUI size="sm" style={{ height: null }}>
            Open : {postDetailData.openTime} AM to {postDetailData.closeTime} PM
          </TextUI>
          <TextUI size="sm" style={{ height: null }}>
            Cost for 2 : TL {postDetailData.costForTwo}
          </TextUI>
        </View>
      </ScrollView>
    </View>
  );
};