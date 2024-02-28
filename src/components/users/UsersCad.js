import React from "react"
import { useState } from "react"
import {Text, View, ScrollView} from 'react-native'
import UsersForm from "./UsersForm"

export default function UsersCad({navigation}) { 

    const [postedUser, setPostedUser] = useState([])

    function createPost(user) {

        fetch("http://10.0.3.2:5291/locadora/api/Usuario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPostedUser(data)
            })
            .catch((err) => console.log("ERRO: " + err))
        navigation.navigate("Lista de Usuários", {postedUser})
    }
    function cancelar() {
        navigation.navigate("Lista de Usuários", {postedUser})
    }

    return(
        <ScrollView>
            <UsersForm 
                handleSubmit={createPost}
                btnText="Cadastrar"
                cancel={cancelar}
            />
        </ScrollView>
    )
}