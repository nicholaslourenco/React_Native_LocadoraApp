import { useState, useEffect } from "react"
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native"

import { container } from "../../styles"

import MoviesCard from "./MoviesCard"
import Loading from "../general/Loading"

export default function MoviesHome({ navigation }) {

    const [movies, setMovies] = useState([])
    const [revomeLoading, setRemoveLoading] = useState(false)
    const [tipoFiltro, setTipoFiltro] = useState(null)
    const [filtro, setFiltro] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://10.0.3.2:5291/locadora/api/Filme/tipoFiltro-filtro?tipoFiltro=${tipoFiltro}&filtro=${filtro}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setMovies(data)
                    setRemoveLoading(true)
                    setFiltro(null)
                    setTipoFiltro(null)
                })
                .catch((err) => console.log("FOI AQUI" + err))
        }, 300)
    }, [])

    function recarregarLista() {
        fetch(`http://10.0.3.2:5291/locadora/api/Filme/tipoFiltro-filtro?tipoFiltro=${tipoFiltro}&filtro=${filtro}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log("FOI AQUI" + err))
    }

    function removeMovies(id) {
        Alert.alert('Confirmar Exclusão!', 'Tem certeza que deseja excluir o Filme?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Exclusão Cancelada.'),
            },
            {
                text: 'Excluir', onPress: () => {
                    fetch(`http://10.0.3.2:5291/locadora/api/Filme/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((resp) => resp.json())
                        .then((data) => {
                            setMovies(movies.filter((movie) => movie.id !== id)) // Não atualiza os filmes na tela em tempo real
                            recarregarLista()
                            //setProjectMessage('Projeto removido com sucesso!')
                        })
                        .catch((err) => console.log(err))
                }
            },
        ]);
    }

    return (
        <ScrollView style={container.container}>
            <View>
                {movies.length > 0 && movies.map((movie) => // Talvez mude pra Flatlist
                    <MoviesCard
                        id={movie.id}
                        nome={movie.nome}
                        genero={movie.genero}
                        classificacao={movie.classificacao}
                        caminhoImagem={movie.caminhoImagem}
                        imagem={movie.imagem}
                        key={movie.id}
                        handleRemove={removeMovies}
                        navigation={navigation}
                    />
                )}
                {!revomeLoading && <Loading />}
                {revomeLoading && movies.length === 0 && (
                    <Text style={container.text}>Não há filmes cadastrados!</Text>
                )}
            </View>
            <View style={container.viewButton}>
                <TouchableOpacity
                    style={container.button}
                    onPress={() => navigation.navigate('Cadastrar')}
                >
                    <Text style={container.textButton}>Cadastrar Novo Filme</Text>
                </TouchableOpacity>
            </View>
            <View style={container.viewButton}>
                <TouchableOpacity
                    style={container.button}
                    onPress={() => navigation.navigate('Lista de Usuários')}
                >
                    <Text style={container.textButton}>Lista de Usuários</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}