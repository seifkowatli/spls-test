import { Theme } from "@mui/material";

export const styles = { 
    sliderContainer: {
        py: 1 ,
        px : 3,
    },
    startButton : { 
        background : (theme : Theme) => theme.gradients.light,
        fontSize : 17,
        p : 1.6,
        fontWeight : "bold",
        borderRadius : 2,
    }
}