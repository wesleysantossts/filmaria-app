import React, {useState, useEffect} from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import tw from "twrnc";
import api from "./src/services/api.js";

import Filmes from "./src/view/components/Filmes/index";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);

    async function loadData(){
      const response = await api.get("r-api/?api=filmes");

      setFilmes(response.data)
      setLoading(false)
    };

    loadData();
  }, []);

  if(loading){
    return(
      <View style={tw`flex-1 justify-center items-center`}>
        <View>
          <ActivityIndicator size={50} color="#121212"/>
        </View>
      </View>
    )
  }

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