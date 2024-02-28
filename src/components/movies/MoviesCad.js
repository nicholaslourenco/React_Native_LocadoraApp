import React from "react"
import { useState } from "react"
import {Text, View, ScrollView} from 'react-native'
import MoviesForm from "./MoviesForm"

export default function MoviesCad({navigation}) { 

    const [postedMovie, setPostedMovie] = useState([])

    function createPost(movie) {

        fetch("http://10.0.3.2:5291/locadora/api/Filme", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPostedMovie(data)
            })
            .catch((err) => console.log("ERRO: " + err))
        navigation.navigate("Lista de Filmes", {postedMovie})
    }
    function cancelar() {
        navigation.navigate("Lista de Filmes", {updatedMovie})
    }

    return(
        <ScrollView>
            <MoviesForm 
                handleSubmit={createPost}
                btnText="Cadastrar"
                cancel={cancelar}
            />
        </ScrollView>
    )
}