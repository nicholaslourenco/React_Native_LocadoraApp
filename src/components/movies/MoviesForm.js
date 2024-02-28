import { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView, Text, TextInput, Image } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';

export default function MoviesForm({ handleSubmit, movieData, btnText, cancel }) {

    const [movie, setMovie] = useState(movieData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(movie)
    }

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem.');
            } else if (response.error) {
                console.log('Erro ao carregar arquivo: ', response.error);
            } else {
                let imageBase64 = response.assets[0].base64
                setMovie({...movie, caminhoImagem: imageBase64})
                console.log("RESPOSTA " + imageBase64)
            }
        });
    };

    return (
        <ScrollView>
            <Text>Nome</Text>
            <TextInput value={movie.nome ? movie.nome : ''} onChangeText={(e) => setMovie({...movie, nome: e})} />
            <Text>Gênero</Text>
            <TextInput value={movie.genero ? movie.genero : ''} onChangeText={(e) => setMovie({...movie, genero: e})} /*onChange={handleChange}*/ />
            <Text>Classificação Indicativa</Text>
            <TextInput value={movie.classificacao ? movie.classificacao : ''} onChangeText={(e) => setMovie({...movie, classificacao: e})} /*onChange={handleChange}*/ />
            <Text>Imagem</Text>
            <Image style={{ width: 130, height: 200 }} source={{ uri: `data:image/jpg;base64,${movie.caminhoImagem}` }} />
            <TouchableOpacity onPress={openImagePicker}>
                <Text>Selecionar Imagem</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={submit}>
                <Text>{btnText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancel}>
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    )

}