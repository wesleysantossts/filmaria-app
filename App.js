import React, {useState, useEffect} from "react";
import { View, FlatList } from "react-native";
import tw from "twrnc";
import api from "./src/services/api.js";

import Filmes from "./src/view/components/Filmes/index";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{
    async function loadData(){
      const response = await api.get("r-api/?api=filmes");

      setFilmes(response.data)
    };

    loadData();
  }, [])

  return (
    <View style={tw`flex-1`}>
      <FlatList
      data={filmes}
      keyExtractor={item => String(item.id)}
      renderItem={({item})=> <Filmes data={item}/>}
      />
    </View>
  );
}