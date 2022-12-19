import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";


import { useForm, Controller } from "react-hook-form";

export default function CreateAccForm({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [response, setResponse] = useState("");
  const [username, setUsername] = useState("");
  const [showAge, setshowAge] = useState(false);

  const findAge = () => {
    fetch(`https://api.agify.io?name=${username}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(response);
        setshowAge(true);
        setResponse(result);
      }, []);
  };
  
  const pressHandler = () => {
    navigation.navigate("LoggedUserHome");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <Controller
          style={styles.test}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nombre"
              style={styles.inputTop}
              onBlur={onBlur}
              onChangeText={setUsername}
              value={username}
            />
          )}
          name="firstName"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Apellidos"
              style={styles.inputBottom}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
        <Text style={styles.infoText}>
          Tu nombre será público lorem ipsum in dolor set.
        </Text>
        {showAge ? (
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={`Edad: ${response["age"]}`}
                style={styles.singleInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="age"
          />
        ) : (
          ""
        )}

        <Pressable style={styles.submit} onPress={findAge}>
          <Text style={styles.submitText}>
            Escribe tu nombre y adivinamos tu edad en un Click
          </Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Controller
          style={styles.test}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Teléfono movil"
              style={styles.singleInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phone"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Dirección"
              style={styles.singleInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
        />
      </View>
      <View style={styles.container}>
        <Controller
          style={styles.test}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              style={styles.inputTop}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Contraseña"
              style={styles.inputBottom}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <Text style={styles.infoText}>
          La Contraseña deberá tener al menos 8 caracteres.
        </Text>
      </View>
      <View style={styles.container}>
        <Controller
          style={styles.test}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Repetir Contraseña"
              style={styles.singleInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="passwordConfirm"
        />

        <Pressable
          style={styles.submit}
          title="Submit"
          onPress={() => pressHandler()}
        >
          <Text style={styles.submitText}>Aceptar y continuar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    alignItems: "center",
    paddingBottom: 15,
  },
  inputTop: {
    height: 45,
    padding: 10,
    width: "85%",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
  },
  inputBottom: {
    height: 45,
    padding: 10,
    width: "85%",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    borderTopEndRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#666",
    alignItems: "center",
  },
  infoText: {
    padding: 5,
    fontSize: 14,
    position: "relative",
  },
  singleInput: {
    height: 45,
    padding: 10,
    width: "85%",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
    marginTop: 5,
  },
  submitText: {
    color: "#fff",
  },
  checkboxContainer: {
    alignContent: "flex-start",
    flexDirection: "row",
  },
  submit: {
    marginTop: 20,
    height: 45,
    justifyContent: "center",
    width: "85%",
    backgroundColor: "#3E445E",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
  },
});
