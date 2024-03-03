import { Theme } from "@mui/material";

export const styles = {
  root: {
    "& .MuiSlider-rail": {
      backgroundColor: "gray",
    },
    "& .MuiSlider-track": {
      background: (theme: Theme) => theme.gradients.light,
      border: "none",
    },
    "& .MuiSlider-thumb": {
      background: (theme: Theme) => theme.gradients.light,
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
    "& .MuiSlider-thumb:hover": {
        boxShadow: '1px 1px 11px 3px #e3397d7a'
    },
    "& .MuiSlider-thumb:active::after": {
        boxShadow: 'none'
    },
    "& .MuiSlider-thumb:active::before": {
        boxShadow: 'none'
    },
    "& .MuiSlider-mark": {
      background: "#e3397d",
    },
    
  },
};
