import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    homeContainer: {
        alignContent: 'center',
        fontFamily: 'vesper-regular',
        backgroundColor: '#226170',
        flex: 1,
        padding: 45,
    },

    titleText:{
        alignContent: 'center',
        fontFamily: 'vesper-bold',
        fontSize: 28,
        color: '#fffee7',
    },

    logoImage:{
        paddingLeft: 300,
        height: 200,
        width: 320,
    },

    wavyTopImage:{
        height: 200,
        paddingLeft: 400,
        width: 320,
    },

    wavyBottomImage:{
        height: 200,
        width: 400,
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})