import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../components/Header";
import GradientText from "../components/Gradient";

export default function LoggedUserHome() {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Header />
        <View
          style={{
            borderBottomColor: "black",
            paddingTop: 5,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={styles.welcomeUserContainer}>
          <Text style={styles.welcomeMsg}>¡Buenos días, </Text>
          <GradientText text="Claudia!" style={{ fontSize: 25 }} />
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground
            imageStyle={{ borderRadius: 10, opacity: 0.9 }}
            style={styles.image}
            blurRadius={90}
            source={require("../assets/senniors-imgg.jpeg")}
            resizeMode="cover"
          >
            <View style={styles.backgroundImgContainer}>
              <View style={styles.headerImgcontent}>
                <View style={styles.btnMum}>
                  <Text>Mamá</Text>
                </View>
                <Ionicons
                  name="md-checkmark-circle"
                  size={25}
                  color="#ffffff"
                />
              </View>
              <Text style={styles.userName}>Antonia Lopez</Text>

              <View style={styles.userStats}>
                <View style={styles.userStateBox}>
                  <Ionicons
                    name="md-checkmark-circle"
                    size={25}
                    color="#ffffff"
                  />
                  <View style={styles.animoStates}>
                    <Text style={styles.textW}>Animo:</Text>
                    <Text style={styles.textWB}>Contenta</Text>
                  </View>
                </View>
                <View style={styles.userStateBox}>
                  <Ionicons
                    name="md-checkmark-circle"
                    size={25}
                    color="#ffffff"
                  />
                  <View style={styles.animoStates}>
                    <Text style={styles.textW}>Animo:</Text>
                    <Text style={styles.textWB}>Contenta</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rutinaContainer}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={25}
                  color="#ffffff"
                />
                <View style={styles.animoStates}>
                  <Text style={styles.textW}>Rutina diaria:</Text>
                  <Text style={styles.textWB}>Sin problemas</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.recomendacionSanitaria}>
          <View style={styles.headerRecomendations}>
            <Ionicons name="md-checkmark-circle" size={25} color="#f4a8ab" />
            <Text style={styles.santitariaTitle}>Recomendación sanitaria</Text>
          </View>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </Text>
          <View
            style={{
              marginTop: 5,
              marginBottom: 5,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.fisioSelect}>
            <Ionicons name="md-checkmark-circle" size={25} color="#000000" />
            <Text style={styles.fisioterapia}>Fisioterapia</Text>
          </View>
        </View>

        <View>
          <Text style={styles.optionsTitle}>¿Que mas podemos ofrecerte?</Text>
          <View style={styles.options}>
            <View>
              <View style={styles.box}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={35}
                  color="#000000"
                />
              </View>
              <Text style={styles.optionText}>Cuidadoras</Text>
            </View>
            <View>
              <View style={styles.box}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={35}
                  color="#000000"
                />
              </View>
              <Text style={styles.optionText}>T.Ocupacional</Text>
            </View>
            <View>
              <View style={styles.box}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={35}
                  color="#000000"
                />
              </View>
              <Text style={styles.optionText}>Otros prof.</Text>
            </View>
          </View>
          <View style={styles.options}>
            <View>
              <View style={styles.box}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={35}
                  color="#000000"
                />
              </View>
              <Text style={styles.optionText}>--</Text>
            </View>
            <View>
              <View style={styles.box}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={35}
                  color="#000000"
                />
              </View>
              <Text style={styles.optionText}>--</Text>
            </View>
            <View>
              <View style={styles.box}>
                <Ionicons
                  name="md-checkmark-circle"
                  size={35}
                  color="#000000"
                />
              </View>
              <Text style={styles.optionText}>--</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Ionicons name="md-checkmark-circle" size={25} color="#000000" />
        <Ionicons name="md-checkmark-circle" size={25} color="#000000" />
        <Ionicons name="md-checkmark-circle" size={25} color="#000000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: "#ececec",
  },
  textW: {
    color: "#ffffff",
  },
  textWB: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  animoStates: {
    paddingLeft: 4,
  },
  welcomeUserContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  welcomeMsg: {
    fontSize: 25,
  },
  imageContainer: {
    height: 190,
  },
  image: {
    flex: 1,
    padding: 10,
  },
  backgroundImgContainer: {
    padding: 10,
  },

  btnMum: {
    backgroundColor: "#5fd7ff",
    borderRadius: 10,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 25,
    color: "#ffffff",
  },
  userStateBox: {
    backgroundColor: "rgba(240, 240, 240, 0.3)",
    padding: 5,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
    flexDirection: "row",
  },
  rutinaContainer: {
    backgroundColor: "rgba(240, 240, 240, 0.3)",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  headerImgcontent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recomendacionSanitaria: {
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderColor: "#5fd7ff",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  headerRecomendations: { flexDirection: "row" },
  santitariaTitle: {
    color: "#f4a8ab",
    fontSize: 20,
    paddingRight: 2,
  },
  fisioSelect: {
    flexDirection: "row",
    alignItems: "center",
  },
  fisioterapia: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 2,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  optionsTitle: {
    fontWeight: "bold",
  },
  optionText: {
    textAlign: "center",
    fontSize: 12,
  },
  box: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    width: 90,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
