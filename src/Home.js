import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { deviceHeight, deviceWidth } from "./Dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "./Cards";
import Details from "./Details";

export default function Home(props) {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "Delhi",
      image: require("../assets/images/delhi.jpg"),
    },
    {
      name: "England",
      image: require("../assets/images/england.jpg"),
    },
    {
      name: "London",
      image: require("../assets/images/london.jpg"),
    },
    {
      name: "Mumbai",
      image: require("../assets/images/mumbai.jpg"),
    },
    {
      name: "San francisco",
      image: require("../assets/images/sanfrance.jpg"),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingVertical: 35,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: deviceWidth - 20,
          }}
        >
          <Icon name="menu" size={34} color="white" />
          <Image
            source={require("../assets/images/user profile.jpg")}
            style={{ height: 34, width: 34, borderRadius: 50 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 32, color: "white" }}>Hello Sourabh</Text>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 18,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{
                paddingHorizontal: 10,
                color: "white",
                fontSize: 16,
              }}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details',
            city)}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}
          >
            My location
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}
