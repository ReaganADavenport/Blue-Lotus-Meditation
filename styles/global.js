import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    homeContainer: {
        alignContent: 'center',
        fontFamily: 'vesper-regular',
        backgroundColor: '#226170',
        flex: 1,
        padding: 0,
    },

    titleBlock:{
        alignContent: 'center',
        paddingLeft: 115,
    },

    titleText:{
        fontFamily: 'vesper-bold',
        fontSize: 28,
        color: '#fffee7',
    },

    logoBlock:{
        paddingLeft: 30,
        paddingTop: 20,
    },

    logoImage:{
        height: 200,
        width: 320,
    },

    wavyBlockTop:{
        paddingLeft: 80,
    },

    wavyTopImage:{
        height: 200,
        width: 320,
    },


    wavyBlockBottom:{
        paddingTop: 150,
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