/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MoviesCard from '../components/movies/MoviesCard';
import MoviesHome from '../components/movies/MoviesHome';
import MovieEdit from '../components/movies/MovieEdit';
import MoviesCad from '../components/movies/MoviesCad';
import MoviesForm from '../components/movies/MoviesForm';
import UserEdit from '../components/users/UserEdit';
import UsersCad from '../components/users/UsersCad';
import UsersList from '../components/users/UsersList';

const Stack = createStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Lista de Filmes" component={MoviesHome} />
            <Stack.Screen options={{ headerShown: false }} name="MoviesCard" component={MoviesCard} />
            <Stack.Screen options={{ headerShown: false }} name="MoviesForm" component={MoviesForm} />
            <Stack.Screen name="Editar" component={MovieEdit} />
            <Stack.Screen name="Cadastrar" component={MoviesCad} />
            <Stack.Screen name="Lista de Usuários" component={UsersList} />
            <Stack.Screen name="Edição de Usuários" component={UserEdit} />
            <Stack.Screen name="Cadastro de Usuários" component={UsersCad} />
        </Stack.Navigator>
    );

}
