
import { StyleSheet, Text, View, Image } from "react-native";
import { SvgUri } from "react-native-svg";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* works with every svg https except this one so i transformed into png*/}
      <SvgUri
        height={10}
        width={10}
        uri="https://hola.senniors.com/wp-content/uploads/2022/12/Logotipo_Senniors_Color_RGB.svg"
      />
      <Image style={styles.imgLogo} source={require('../assets/logo.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({

  imgLogo: {
    width: 200,
    height: 50,
  },
});
