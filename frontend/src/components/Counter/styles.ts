import { Theme } from "@mui/material";

export const styles = {
    root : {
        backgroundImage : (theme: Theme) => theme.gradients.dark,
        m : 1,
        alignItems : 'center',
        p : 1, 
        borderRadius : 1,

    },
    title  : {
        fontSize : 10,
        opacity : .5,
    },
    counter : {
        gap : 1,
        justifyContent: 'space-between',
        alignItems : 'center',
    },
    button  : { 
        height : 23,
        width: 23,
        borderRadius :1.6,
        border : '2px solid',
        borderColor : 'gray',
    },
    increaseIcon : {
        fontSize : 13,
        transform : "rotate(90deg)"
    },
    decreaseIcon : {
        fontSize : 13,
        transform : "rotate(-90deg)"
    },
    value  : { 
        backgroundColor : 'background.default',
        fontSize : 13,
        borderRadius : 1.5,
        justifyContent : 'center',
        '& input' : {
            textAlign : 'center',
        }
    }
}