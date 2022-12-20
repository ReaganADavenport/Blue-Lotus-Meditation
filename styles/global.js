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
        paddingTop: 30,
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

    buttonBlock:{
        alignContent: 'center',
        alignSelf: 'center',
        padding: 50,
        textAlign: 'center',
        // paddingLeft: 130,
    },

    button:{        
        color: '#000',
        backgroundColor: '#f7c502',
        borderRadius: 5,
        textAlign: 'center',
        width: 200,
    },

    buttonText:{
        fontFamily: 'vesper-bold',
        fontSize: 24,
        color: '#fffee7',
        textAlign:'center',
    },


    wavyBlockBottom:{
        paddingTop: 50,
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