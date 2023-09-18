import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
   return (
      <View style={styles.backgroundStyle}>
         <Feather style={styles.iconStyle} name="search" color="black" />

         <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            //
            autoCapitalize="none"
            autoCorrect={false}
            //
            value={term}
            onChangeText={(newValue) => {
               onTermChange(newValue);
            }}
            //
            onEndEditing={onTermSubmit} // p'cuando pican el "realizado" en el teclado
         />
      </View>
   );
};

const styles = StyleSheet.create({
   backgroundStyle: {
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 15,
      backgroundColor: "#c5c9db",
      height: 50,
      borderRadius: 10,
      flexDirection: "row",

      // alignItems: "center", me ponia margenes arriba y abajo
   },
   iconStyle: {
      fontSize: 40,
      alignSelf: "center",
      marginHorizontal: 15,
   },
   inputStyle: {
      // borderColor: "black",
      // borderWidth: 1,
      flex: 1,
      fontSize: 16,
   },
});

export default SearchBar;
