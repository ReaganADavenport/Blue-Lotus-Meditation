import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    homeContainer: {
        fontFamily: 'vesper-regular',
        backgroundColor: '#226170',
        flex: 1,
        padding: 45,
    },

    titleText:{
        fontFamily: 'vesper-bold',
        fontSize: 18,
        color: '#333',
    },

    logoImage:{
        alignContent: 'center',
        justifyContent: 'center',
        height: 200,
        width: 300,
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})