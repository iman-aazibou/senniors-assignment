import React, { useRef, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import GradientText from "../components/Gradient";

import {
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";

//comp
import Header from "../components/Header";
export default function Home({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const pressHandler = () => {
    navigation.navigate("Form")
  };



  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 8000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          width: 370,
          alignSelf: "center",
        }}
      />
      <View style={styles.body}>
        <Text style={styles.text}>Bienvendo a {"\n"}Senniors familias,</Text>
        <GradientText text="el complemento" style={{ fontSize: 40 }} />
        <GradientText text="perfecto del" style={{ fontSize: 40 }} />
        <GradientText text="Homecare" style={{ fontSize: 40 }} />
        <Animated.View // Special animatable View
          style={{
            opacity: fadeAnim, // Bind opacity to animated value
          }}
        >
          <Text style={styles.textund}>
            Nuestra aplicación te ayudará{"\n"}a saber como están tus seres
            {"\n"}
            queridos en tiempo real.
          </Text>
        </Animated.View>
      </View>

      <View style={styles.btnscontainer}>
        <Pressable style={styles.button} onPress={() => pressHandler()}>
          <Ionicons name="md-checkmark-circle" size={25} color="#71caf2" />
          <Text>Acceder con senniors ID</Text>
        </Pressable>
        <View style={styles.divider}>
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
              width: 145,
              alignSelf: "center",
            }}
          />
          <Text style={styles.o}>O</Text>
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
              width: 145,
              alignSelf: "center",
            }}
          />
        </View>

        <Pressable style={styles.button} onPress={() => pressHandler()}>
          <Ionicons name="md-checkmark-circle" size={25} color="#71caf2" />
          <Text>Continuar con Google</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => pressHandler()}>
          <Ionicons name="md-checkmark-circle" size={25} color="#71caf2" />
          <Text>Crear una cuenta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 40,
    paddingTop: 20,
    paddingBottom: 30,
  },
  text: {
    color: "#59667D",
    fontSize: 35,
    fontWeight: "light",
  },
  textcol: {
    fontSize: 35,
  },
  textund: {
    fontSize: 15,
    color: "#747474",
  },
  btnscontainer: {
    alignItems: "center",
  },
  divider: {
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 15,
  },
  o: {
    padding: 5,
  },
  button: {
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
