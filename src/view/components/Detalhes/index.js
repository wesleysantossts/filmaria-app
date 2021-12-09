import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={props.voltar} style={tw`items-end mr-2 mt-2`}>
          <Icon name="window-close" color="#ff0000" size={30} />
        </TouchableOpacity>
        <View style={tw`p-6`}>
          <Text style={tw`text-white text-3xl font-bold mb-5`}>{props.filmes.nome}</Text>
          <Text style={tw`text-white text-xl mb-2`}>Sinopse:</Text>
          <Text style={tw`text-white text-lg text-justify`}>{props.filmes.sinopse}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer:{
    height: "80%",
    width: "93.8%",
    backgroundColor: "#00aaff",
    opacity: .93,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  }
})