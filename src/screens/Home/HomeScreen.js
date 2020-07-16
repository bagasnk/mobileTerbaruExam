import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import { useSelector, useDispatch } from "react-redux";



const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});



export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);
  const userSelector = useSelector(state => state.user)

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPosts = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <Header title={userSelector.username} />
      <FlatList
       // ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 20 }}
        data={postList}
        renderItem={renderPosts}
        keyExtractor={(item,index) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};