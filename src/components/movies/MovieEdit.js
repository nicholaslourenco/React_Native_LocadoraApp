import React, { useState } from "react"
import {Text, View, ScrollView} from 'react-native'
import MoviesForm from "./MoviesForm"

export default function MovieEdit({route, navigation, movieList}) {

    const [updatedMovie, setUpdatedMovie] = useState([])


    function editPost(movie) {

        fetch(`http://10.0.3.2:5291/locadora/api/Filme/${movie.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setUpdatedMovie(data)
            })
            .catch((err) => console.log("ERRO: " + err))
        navigation.navigate("Lista de Filmes", {updatedMovie})
    }

    function cancelar() {
        navigation.navigate("Lista de Filmes", {updatedMovie})
    }

    return(
        <ScrollView>
            <MoviesForm 
                handleSubmit={editPost}
                btnText="Editar"
                movieData={route.params.movie}
                cancel={cancelar}
            />
        </ScrollView>
    )
}