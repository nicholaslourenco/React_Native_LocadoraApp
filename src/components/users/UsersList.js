import { useState, useEffect } from "react"
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native"
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';

import { container } from "../../styles"

import Loading from "../general/Loading"

export default function UsersList({ navigation }) {

    const [users, setUsers] = useState([])
    const [revomeLoading, setRemoveLoading] = useState(false)
    const [tableHead, setTableHead] = useState(['Id', 'Nome', 'Login', 'Senha', 'Tipo', 'Ações'])
    const widthArr = [40, 150, 150, 150, 40, 80]

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://10.0.3.2:5291/locadora/api/Usuario`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setUsers(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log("ERRO: " + err))
        }, 300)
    }, [])

    function recarregarLista() {
        fetch(`http://10.0.3.2:5291/locadora/api/Usuario`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log("ERRO: " + err))
    }

    function removeUser(id) {
        Alert.alert('Confirmar Exclusão!', 'Tem certeza que deseja excluir o Usuário?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Exclusão Cancelada.'),
            },
            {
                text: 'Excluir', onPress: () => {
                    fetch(`http://10.0.3.2:5291/locadora/api/Usuario/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((resp) => resp.json())
                        .then((data) => {
                            setUsers(users.filter((user) => user.id !== id))
                            recarregarLista()
                            //setProjectMessage('Projeto removido com sucesso!')
                        })
                        .catch((err) => console.log(err))
                }
            },
        ]);
    }

    const rowsUser = []
    for (let i = 0; i < users.length; i++) {
        const row = [users[i].id, users[i].nome, users[i].login, users[i].senha, users[i].tipo, '']
        rowsUser.push(row)
    }
    console.log(rowsUser)

    function alertIndex(index) {
        Alert.alert(`O id deste usuário é ${index}`);
    }

    const element = (data, index) => (
        <View style={container.inputView}>
            <TouchableOpacity style={container.inputEdit} onPress={() => alertIndex(index)}>
                <Text style={container.inputText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={container.inputDelete} onPress={() => alertIndex(index)}>
                <Text style={container.inputText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={container.container}>
            <ScrollView horizontal={true}>
                <View style={{marginTop: 30, marginBottom: 30}}>
                    <Table borderStyle={{ borderColor: '#ffffff', borderWidth: 1 }}>
                        <Row widthArr={widthArr} data={tableHead} textStyle={container.tableText} />
                        {
                            rowsUser.map((rowData, index) => (

                                <TableWrapper widthArr={widthArr} key={index} style={{ flexDirection: 'row', marginTop: 10 }}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell width={widthArr[cellIndex]} textStyle={container.tableText} key={cellIndex} data={cellIndex === 5 ? element(cellData, users[index].id) : cellData} />
                                        ))
                                    }
                                </TableWrapper>

                            ))
                        }
                    </Table>
                </View>
            </ScrollView>

            <View style={container.viewButton}>
                <TouchableOpacity
                    style={container.button}
                    onPress={() => navigation.navigate('Cadastrar Usuário')}
                >
                    <Text style={container.textButton}>Cadastrar Novo Usuário</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}