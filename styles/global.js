import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    homeContainer: {
        alignContent: 'center',
        fontFamily: 'vesper-bold',
        backgroundColor: '#226170',
        flex: 1,
        padding: 0,
    },

    titleBlock:{
        alignContent: 'center',
        paddingLeft: 115,
        top: 130,
    },

    titleText:{
        fontFamily: 'vesper-bold',
        fontSize: 28,
        color: '#fffee7',
    },

    logoBlock:{
        paddingLeft: 30,
        paddingTop: 30,
        top: 160,
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
        position: 'absolute',
        left: 80,
        width: 320,
    },

    buttonBlock:{
        alignContent: 'center',
        alignSelf: 'center',
        padding: 50,
        textAlign: 'center',
        top: 170,
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
        top: 160,
        zIndex: 1,
    },

    wavyBottomImage:{
        height: 200,
        width: 400,
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },


    logContainer:{
        alignContent: 'center',
        fontFamily: 'vesper-bold',
        backgroundColor: '#5faea5',
        flex: 1,
        padding: 0,
    },

    logBlock:{
        alignContent: 'center',
        paddingLeft: 115,
        top: 90,
    },

    logText:{
        fontFamily: 'vesper-bold',
        fontSize: 28,
        color: '#fffee7',
    },

    imageBlock: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingLeft: 30,
        top: 80,
        zIndex: 2,
    },


    meditationImage:{
        flexDirection: 'row',
        width: 150,
        height: 400,
        resizeMode: 'contain',
        marginLeft: 20,
    },

    playerContainer:{
        alignContent: 'center',
        backgroundColor: '#fffde6',
        fontFamily: 'vesper-bold',
        flex: 1,
        padding: 0,
    },

    playerBlock:{
        alignContent: 'center',
        top: 130,
    },

    playerText:{
        fontFamily: 'vesper-bold',
        fontSize: 28,
        color: '#226170',
        textAlign: 'center',
    }
})