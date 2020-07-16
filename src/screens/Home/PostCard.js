import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";

import PlaceholderProfPic from "../../../assets/images/signup_bg.png";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});

export default ({ navigation, data }) => {
  console.log( data.User);
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 250,
        marginHorizontal: 15,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
      }}
    >
      
      <TouchableOpacity
              onPress={() =>
                navigation.navigate("HomePostDetail", { postDetailData: data })
              }
            >
           
      <ImageScale
        source={{
          uri: data.image,
          // uri: "https://picsum.photos/200/300.jpg",
        }}
        style={{
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        width={width - 250}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Tagline>
              <Icon
                type="Entypo"
                name="star"
                style={{color:"yellow", fontSize:15}}
              />{data.rating}
            </Tagline>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
                fontSize:10
              }}
            >
              {data.restaurantName}
            </TextUI>

          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};