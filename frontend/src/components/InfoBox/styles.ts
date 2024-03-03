import { Theme } from "@mui/material";

export const styles = { 
    root : {
        backgroundImage : (theme: Theme) => theme.gradients.dark,
        minHeight : 30,
        borderRadius : 1,
        gap : 1 ,
        justifyContent : 'center',
        m  :1 ,
    }
}