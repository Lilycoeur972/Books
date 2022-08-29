import { StyleSheet } from "react-native";
import {colors} from './colors';


export const styles = StyleSheet.create({
        content:{
            backgroundColor:"red",
            padding :10,
            margin:10,
            borderRadius:5,
            flexDirection :'row'
        },
        titre:{
           color: colors.textPrimary,
        fontSize:24,
        fontWeight:'600',
    }
    ,
    image:{

        width: 100,
        height : 100,
        borderRadius:50 ,
    }
    })
