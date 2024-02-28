import { Text, View, ActivityIndicator } from 'react-native'
import { loader } from '../../styles'

export default function Loading() {

    return (
        <View style={loader.loaderContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    )

}