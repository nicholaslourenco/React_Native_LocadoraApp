import React, { useState } from "react"
import {Text, View, ScrollView} from 'react-native'
import UsersForm from "./UsersForm"

export default function UserEdit({route, navigation}) {

    const [updatedUser, setUpdatedUser] = useState([])


    function editPost(user) {

        fetch(`http://10.0.3.2:5291/locadora/api/Usuario/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setUpdatedUser(data)
            })
            .catch((err) => console.log("ERRO: " + err))
        navigation.navigate("Lista de Usuários", {updatedUser})
    }

    function cancelar() {
        navigation.navigate("Lista de Usuários", {updatedUser})
    }

    return(
        <ScrollView>
            <UsersForm 
                handleSubmit={editPost}
                btnText="Editar"
                userData={route.params.user}
                cancel={cancelar}
            />
        </ScrollView>
    )
}