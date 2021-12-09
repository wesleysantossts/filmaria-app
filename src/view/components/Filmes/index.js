import React, { useState } from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, Modal} from "react-native";
import tw from "twrnc";

import Detalhes from "../Detalhes/index.js";

export default function Filmes({data}){
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>
      <View style={styles.containerFilmes}>
        <Text style={tw`p-3 text-lg font-bold`}>{data.nome}</Text>
        <Image
        style={tw`w-full h-62 rounded-2 z-2`}
        source={{uri: data.foto}}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={()=> setVisibleModal(true)}>
            <Text style={tw`w-40 bg-blue-400 opacity-90 text-white font-bold p-2 rounded-tl-lg rounded-bl-lg text-center uppercase`}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filmes={data} voltar={()=> setVisibleModal(false)}/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  containerFilmes:{
    backgroundColor: "#fff",
    margin: 12,
    elevation: 2,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    height: 300,
  },
  areaBtn:{
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 10,
  },
})