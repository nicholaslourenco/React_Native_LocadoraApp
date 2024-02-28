import { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView, Text, TextInput, Image } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';

export default function UsersForm({ handleSubmit, userData, btnText, cancel }) {

    const [user, setUser] = useState(userData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(user)
    }

    return (
        <ScrollView>
            <Text>Nome</Text>
            <TextInput value={user.nome ? user.nome : ''} onChangeText={(e) => setUser({...user, nome: e})} />
            <Text>Login</Text>
            <TextInput value={user.login ? user.login : ''} onChangeText={(e) => setUser({...user, login: e})} />
            <Text>Senha</Text>
            <TextInput value={user.senha ? user.senha : ''} onChangeText={(e) => setUser({...user, senha: e})} />
            <Text>Tipo</Text>
            <TextInput value={user.tipo ? user.tipo : ''} onChangeText={(e) => setUser({...user, tipo: e})} />
            <TouchableOpacity onPress={submit}>
                <Text>{btnText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancel}>
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    )

}