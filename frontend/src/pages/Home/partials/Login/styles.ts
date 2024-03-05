import { Theme } from "@mui/material";

export const styles = {
  root: {
    height: 570,
    '& .MuiButton-contained' : { 
        background : (theme : Theme) => theme.gradients.light,
        color : 'white',
    },
    '& .MuiButton-contained.Mui-disabled ' : { 
        background : '#393939',        
        color : 'gray',
    }

    
  },
  loginInput : { 
    border : '2px solid grey',
    borderRadius : 1.5,
    height : 50,
    p: 1
},
  loginButton : {
    height : 50,
    
  }
};
