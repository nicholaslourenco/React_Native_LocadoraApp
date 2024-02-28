import { StyleSheet, Dimensions } from "react-native";
const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;

const moviesCard = StyleSheet.create({
    card: {
        borderColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 175,
        margin: 8,
    },
    text: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 2
    },
    inputDelete: {
        borderRadius: 5,
        backgroundColor: '#fa0f0f',
        padding: 3,
        margin: 3
    },
    inputEdit: {
        borderRadius: 5,
        backgroundColor: '#0f3afa',
        padding: 4,
        margin: 3
    }
});

const container = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
        fontSize: 12,
        backgroundColor: '#1c1c36',
        color: '#ffffff'
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#5900ff',
        padding: 5,
        alignItems: 'center',
        width: SLIDER_WIDTH * 0.6
    },
    viewButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    textButton: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    text: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf:'center',
        margin: 20
    },
    tableText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf:'center',
        textAlign: 'center'
    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputDelete: {
        borderRadius: 5,
        backgroundColor: '#fa0f0f',
        padding: 4,
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    inputEdit: {
        borderRadius: 5,
        backgroundColor: '#0f3afa',
        padding: 4,
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    inputText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 2
    }
});

const loader = StyleSheet.create({
    loaderContainer: {
        width: SLIDER_WIDTH,
        height: SLIDER_HEIGHT * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    }
});

export {moviesCard, container, loader}