import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native"

import {moviesCard} from "../../styles";

export default function MoviesCard({id, nome, genero, classificacao, caminhoImagem, imagem, handleRemove, navigation}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <View style={moviesCard.card}>
            <Image style={{width: 130, height: 200}} source={{uri: `data:image/jpg;base64,${caminhoImagem}`}} />
            <Text style={moviesCard.text}>{nome}</Text>
            <Text style={moviesCard.text}>{genero}</Text>
            <Text style={moviesCard.text}>{classificacao}</Text>
            <TouchableOpacity style={moviesCard.inputDelete} onPress={remove}>
                <Text style={moviesCard.text}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moviesCard.inputEdit}
                onPress={() => navigation.navigate('Editar', {
                    movie: {
                        id: id,
                        nome: nome,
                        genero: genero,
                        classificacao: classificacao,
                        caminhoImagem: caminhoImagem,
                    }
                })}
            >
                <Text style={moviesCard.text}>Editar</Text>
            </TouchableOpacity>
        </View>
    )

}